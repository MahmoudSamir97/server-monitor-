import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';
import { CreateUserDto } from '@/modules/users/dto/create-user.dto.js';
import { UpdateUserDto } from '@/modules/users/dto/update-user.dto.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  create(createUserDTO: CreateUserDto) {
    const user = this.repo.create(createUserDTO);
    return this.repo.save(user);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  update(id: string, updateUserDTO: UpdateUserDto) {
    const user = this.repo.findOneBy({ id });
    if (!user) throw new NotFoundException('user not found');
    return this.repo.update(id, updateUserDTO);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
