import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	@Column({ name: 'nome', length: 100, nullable: false })
	name: string;
	@Column({ name: 'email', length: 50, nullable: false })
	email: string;
	@Column({ name: 'status', default: true })
	status: boolean;
	@CreateDateColumn({ name: 'criado_em' })
	criadoEm: string;
	@UpdateDateColumn({ name: 'modificado_em' })
	modificadoEm: string;
}
