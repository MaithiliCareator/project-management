import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo:Repository<Employee>,
  ){}
  create(createEmployeeInput: CreateEmployeeInput) {
    const CREATE=this.employeeRepo.create(createEmployeeInput)
    return this.employeeRepo.save(CREATE);
  }


  findAll() {
    return this.employeeRepo.find();
  }

  findOne(id: number) {
    return this.employeeRepo.findOne(id);
  }

  update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
    const UPDATE=this.employeeRepo.create(updateEmployeeInput)
    return this.employeeRepo.update(id,UPDATE);
  }

  remove(id: number) {
    return this.employeeRepo.delete(id);
  }
}
