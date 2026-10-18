import 'dotenv/config'; // the CLI doesn't boot Nest, so load .env manually
import { DataSource } from 'typeorm';
import { buildDataSourceOptions } from './database.options.js';
import { databaseConfig } from '../config/database.config.js';

export default new DataSource(buildDataSourceOptions(databaseConfig()));
