import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    user_id:string

    @Column({length: 20})
    username: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column()
    birthday: Date

    @CreateDateColumn()
    created_at: Date

}