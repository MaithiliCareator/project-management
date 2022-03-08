import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTimesheetInput } from './dto/create-timesheet.input';
import { UpdateTimesheetInput } from './dto/update-timesheet.input';
import { Timesheet } from './entities/timesheet.entity';

@Injectable()
export class TimesheetService {
  constructor(
    @InjectRepository(Timesheet)
    private readonly timesheetRepo:Repository<Timesheet>
  ){}
  create(createTimesheetInput: CreateTimesheetInput) {
    const CREATE=this.timesheetRepo.create(createTimesheetInput);
    return this.timesheetRepo.save(CREATE);
  }

  findAll() {
    return this.timesheetRepo.find();
  }

  findOne(id: number) {
    return this.timesheetRepo.findOne(id);
  }

  update(id: number, updateTimesheetInput: UpdateTimesheetInput) {
    const UPDATE=this.timesheetRepo.create(updateTimesheetInput);
    return this.timesheetRepo.update(id,UPDATE);
  }

  remove(id: number) {
    return this.timesheetRepo.delete(id);
  }
}
