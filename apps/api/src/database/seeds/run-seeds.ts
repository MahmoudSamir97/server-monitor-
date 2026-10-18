import dataSource from '../data-source.js';
import { seedUsers } from './dev/users.seed.js';

async function run() {
  await dataSource.initialize(); // connect to Postgres

  try {
    // fake/dev data: never runs in production
    if (process.env.NODE_ENV !== 'production') {
      await seedUsers(dataSource);
      // later: await seedAlerts(dataSource); and so on, one line per seeder
    }

    console.log('Seeding done ✅');
  } finally {
    await dataSource.destroy(); // always disconnect, even if something failed
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
