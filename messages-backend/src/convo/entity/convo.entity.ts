import { Message } from "src/message/entity/message.entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Convo{

    @PrimaryGeneratedColumn()
    convo_id: string

    @ManyToOne(() => User, user => user.convosAsUser1)
    user1: User | string

    @ManyToOne(() => User, user => user.convosAsUser2)
    user2: User | string

    @OneToMany(() => Message, (message) => message.convo)
    meessage: Message[]

    @Column()
    last_message_at: Date
}