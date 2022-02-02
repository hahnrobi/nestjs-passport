import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'robi',
      password: '1234',
    },
    {
      userId: 2,
      email: 'test',
      password: '4567',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
	  Logger.log(email);
    return this.users.find(user => user.email === email);
  }
}