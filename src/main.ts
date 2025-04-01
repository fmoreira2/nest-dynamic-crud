import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const port = process.env.APP_PORT ?? 3000;

	app.enableCors();

	await app.listen(port ?? 3000, () => {
		Logger.log(`Servidor iniciado em ${process.env.APP_HOST}:${port}`);
	});
}

bootstrap();
