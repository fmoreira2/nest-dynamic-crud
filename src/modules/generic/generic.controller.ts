import { Controller, Get, Post, Body, Param, Delete, Logger, Put } from '@nestjs/common';
import { GenericService } from './generic.service';

@Controller('')
export class GenericController {
	constructor(private readonly genericService: GenericService) {}

	@Post(':entity')
	create(@Body() dados: any, @Param('entity') entity: string) {
		return this.genericService.create(entity, dados);
	}

	@Get(':entity')
	findAll(@Param('entity') entity: string) {
		Logger.log(`Entidade: ${entity}`);
		return this.genericService.findAll(entity);
	}

	@Get(':entity/:id')
	findOne(@Param('entity') entity: string, @Param('id') id: string) {
		return this.genericService.findOne(id, entity);
	}

	@Put(':entity/:id')
	update(@Param('entity') entity: string, @Param('id') id: string, @Body() dados: any) {
		return this.genericService.update(id, entity, dados);
	}

	@Delete(':entity/:id')
	remove(@Param('entity') entity: string, @Param('id') id: string) {
		return this.genericService.remove(id, entity);
	}
}
