import { DataSource } from 'typeorm';
import { User } from '../../../modules/users/entities/user.entity.js';

export async function seedUsers(dataSource: DataSource) {
  const usersRepository = dataSource.getRepository(User);

  await usersRepository.upsert(
    [
      { name: 'Admin', email: 'admin@test.com' },
      { name: 'Mahmoud', email: 'mahmoud@test.com' },
    ],
    ['email'],
  );

  console.log('Users seeded');
}
