import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCostInput } from './dto/create-cost.input';
import { UpdateCostInput } from './dto/update-cost.input';
import {Repository} from 'typeorm'
import { Cost } from './entities/cost.entity';
@Injectable()
export class CostService {
  constructor(
    @InjectRepository(Cost)
    private readonly costRepo:Repository<Cost>
  ){}
  create(createCostInput: CreateCostInput) {
    const CREATE=this.costRepo.create(createCostInput);
    return this.costRepo.save(CREATE);
  }

  findAll() {
    return this.costRepo.find();
  }

  findOne(id: number) {
    return this.costRepo.findOne(id);
  }

  update(id: number, updateCostInput: UpdateCostInput) {
    const UPDATE=this.costRepo.create(updateCostInput)
    return this.costRepo.update(id,UPDATE)
  }
  remove(id: number) {
    return this.costRepo.delete(id);
  }
}
