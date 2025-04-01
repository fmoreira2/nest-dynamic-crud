import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import dataSource from 'src/db/data-sources-cli';

@Injectable()
export class GenericService {
	constructor() {}

	async create(entity: string, data: any) {
		try {
			const ds = (await dataSource.isInitialized)
				? dataSource
				: await dataSource.initialize();

			const repository = ds.getRepository(entity);

			const item = repository.create(data);
			await repository.save(item);

			return {
				message: `Usuário criado com sucesso.`,
				status: HttpStatus.CREATED,
			};
		} catch (error) {
			Logger.error(error);
			throw new HttpException(`Erro ao criar registro de ${entity}`, HttpStatus.NOT_FOUND);
		}
	}

	async findAll(entity: string) {
		try {
			const ds = (await dataSource.isInitialized)
				? dataSource
				: await dataSource.initialize();
			const repository = ds.getRepository(entity);
			const items = await repository.find();

			if (!items || items.length === 0) {
				throw new HttpException(
					`Nenhum registro encontrado para ${entity}`,
					HttpStatus.NOT_FOUND,
				);
			}

			return items;
		} catch (error) {
			Logger.error(error);
			throw new HttpException(`Erro ao buscar registros de ${entity}`, HttpStatus.NOT_FOUND);
		}
	}

	async findOne(id: string, entity: string) {
		try {
			const ds = (await dataSource.isInitialized)
				? dataSource
				: await dataSource.initialize();
			const repository = ds.getRepository(entity);
			const item = await repository.findOne({
				where: { id },
			});

			if (!item || item.length === 0) {
				throw new HttpException(
					`Nenhum registro encontrado para ${entity} com o id ${id}`,
					HttpStatus.NOT_FOUND,
				);
			}

			return item;
		} catch (error) {
			Logger.error(error);
			throw new HttpException(
				`Erro ao buscar registro de ${entity} com o id ${id}`,
				HttpStatus.NOT_FOUND,
			);
		}
	}

	async update(id: string, entity: string, data: any) {
		try {
			const ds = (await dataSource.isInitialized)
				? dataSource
				: await dataSource.initialize();
			const repository = ds.getRepository(entity);
			const items = await repository.findOne({
				where: { id },
			});

			if (!items || items.length === 0) {
				throw new HttpException(
					`Nenhum registro encontrado para ${entity} com o id ${id}`,
					HttpStatus.NOT_FOUND,
				);
			}

			repository.update(id, data);

			return items;
		} catch (error) {
			Logger.error(error);
			throw new HttpException(
				`Erro ao atualizar registro de ${entity} com o id ${id}`,
				HttpStatus.NOT_FOUND,
			);
		}
	}

	async remove(id: string, entity: string) {
		try {
			const ds = (await dataSource.isInitialized)
				? dataSource
				: await dataSource.initialize();
			const repository = ds.getRepository(entity);
			const item = await repository.findOne({
				where: { id },
			});

			if (!item || item.length === 0) {
				throw new HttpException(
					`Nenhum registro encontrado para ${entity} com o id ${id}`,
					HttpStatus.NOT_FOUND,
				);
			}

			repository.remove(item);

			return item;
		} catch (error) {
			Logger.error(error);
			throw new HttpException(
				`Erro ao remover registro de ${entity} com o id ${id}`,
				HttpStatus.NOT_FOUND,
			);
		}
	}
}
