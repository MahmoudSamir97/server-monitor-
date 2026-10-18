import { join } from 'node:path';
import { ConfigType } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { databaseConfig } from '../config/database.config.js';

const dirname = import.meta.dirname; // ESM version of __dirname

export function buildDataSourceOptions(
  db: ConfigType<typeof databaseConfig>,
): DataSourceOptions {
  return {
    type: 'postgres',
    host: db.host,
    port: db.port,
    username: db.username,
    password: db.password,
    database: db.database,
    ssl: db.ssl,

    entities: [join(dirname, '..', '**', '*.entity.{ts,js}')],
    migrations: [join(dirname, 'migrations', '*.{ts,js}')],
    migrationsTableName: 'migrations',

    synchronize: true,
    migrationsRun: false,
    namingStrategy: new SnakeNamingStrategy(),
    logging: db.logging,
    extra: { max: 10 },
  };
}
