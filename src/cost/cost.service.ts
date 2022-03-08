import { Injectable } from '@nestjs/common';
import { CreateCostInput } from './dto/create-cost.input';
import { UpdateCostInput } from './dto/update-cost.input';

@Injectable()
export class CostService {
  create(createCostInput: CreateCostInput) {
    return 'This action adds a new cost';
  }

  findAll() {
    return `This action returns all cost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cost`;
  }

  update(id: number, updateCostInput: UpdateCostInput) {
    return `This action updates a #${id} cost`;
  }

  remove(id: number) {
    return `This action removes a #${id} cost`;
  }
}
