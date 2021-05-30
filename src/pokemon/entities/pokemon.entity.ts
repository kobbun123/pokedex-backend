import { ObjectID } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  pokemonName: string;

  @Column()
  pokemonType: string;

  @Column()
  pokemonPhoto: string[];
}
