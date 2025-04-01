import { Logger } from '@nestjs/common';
import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
	type: 'postgres',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	migrations: [__dirname + '/migrations/*.{js,ts}'],
	migrationsTableName: 'custom_migration_table',
	
};

const dataSource = new DataSource(dataSourceOptions);

dataSource
	.initialize()
	.then(() => {
        Logger.log('Data Source inicializado!');
	})
	.catch((err) => {
		Logger.error('Erro ao inicializar o Data Source', err);
	});

export default dataSource;
