import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("news")
export class News {
  @PrimaryColumn()
  id: string;

  @Column()
  hat: string;

  @Column()
  url: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  thumbnail: string;

  @Column('longtext')
  content: string;

  @CreateDateColumn()
  date_time_publication: Date;

  constructor(){
    if(!this.id) this.id = uuid()
  }
}