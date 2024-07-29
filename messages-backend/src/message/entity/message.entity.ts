import { Convo } from "src/convo/entity/convo.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message{
    @PrimaryGeneratedColumn()
    message_id: string

    @Column()
    message: string

    @ManyToOne(() =>Convo,(convo) => convo.meessage)
    convo: Convo

    @CreateDateColumn()
    created_at: Date

    @Column()
    read_at: Date

}