import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepo:Repository<Client>
    
  ){}
  create(createClientInput: CreateClientInput) {
    const CREATE=this.clientRepo.create(createClientInput)
    return this.clientRepo.save(CREATE);
  }

  findAll() {
    return this.clientRepo.find();
  }

  findOne(id: number) {
    return this.clientRepo.findOne(id);
  }

  update(id: number, updateClientInput: UpdateClientInput) {
    const UPDATE=this.clientRepo.create(updateClientInput);

    return this.clientRepo.update(id,UPDATE);
  }

  remove(id: number) {
    return this.clientRepo.delete(id);
  }
}
