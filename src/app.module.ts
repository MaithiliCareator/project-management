import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { config } from './config';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { ClientModule } from './client/client.module';
import { ProjectModule } from './project/project.module';
import { CostModule } from './cost/cost.module';
import { TimesheetModule } from './timesheet/timesheet.module';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    load: [config],
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) =>
      configService.get('database'),
    inject: [ConfigService],
  }),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),AuthModule,UserModule, EmployeeModule, ClientModule, ProjectModule, CostModule, TimesheetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
