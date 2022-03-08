import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo:Repository<Project>
  ){

  }
  create(createProjectInput: CreateProjectInput) {
    const CREATE=this.projectRepo.create(createProjectInput)
    return this.projectRepo.save(CREATE);
  }

  findAll() {
    return this.projectRepo.find();
  }

  findOne(id: number) {
    return this.projectRepo.findOne(id);
  }

  update(id: number, updateProjectInput: UpdateProjectInput) {
    const UPDATE=this.projectRepo.create(updateProjectInput)
    return this.projectRepo.update(id,UPDATE);
  }

  remove(id: number) {
    return this.projectRepo.delete(id);
  }
}
