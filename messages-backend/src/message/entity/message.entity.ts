import { Convo } from "src/convo/entity/convo.entity";
import { User } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message{
    @PrimaryGeneratedColumn()
    message_id: string

    @Column()
    message: string

    @ManyToOne(() =>Convo,(convo) => convo.meessage)
    convo: Convo | string

    @ManyToOne(() => User)
    user_msg:  User | string

    @CreateDateColumn()
    created_at: Date

    @Column()
    read_at: Date

}