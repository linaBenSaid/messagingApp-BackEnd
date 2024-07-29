import { Convo } from "src/convo/entity/convo.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Convo, convo => convo.user1)
    convosAsUser1: Convo[];

    @OneToMany(() => Convo, convo => convo.user2)
    convosAsUser2: Convo[] | string[];

}