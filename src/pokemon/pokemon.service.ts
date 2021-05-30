import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}
  async create(createPokemonDto: CreatePokemonDto) {
    return this.pokemonRepository.save(createPokemonDto);
  }

  findAll(searchText: string) {
    return this.pokemonRepository.find({
      where: {
        $or: [
          {
            title: { $regex: `.*${searchText ?? ''}.*`, $options: 'i' },
          },
          {
            description: { $regex: `.*${searchText ?? ''}.*`, $options: 'i' },
          },
        ],
      },
    });
  }

  findOne(id: ObjectID) {
    return this.pokemonRepository.find({ where: { _id: id } });
  }

  async update(id: ObjectID, updatePokemonDto: UpdatePokemonDto) {
    let stringId: string = id.toHexString();
    return this.pokemonRepository.update(stringId, updatePokemonDto);
  }
  async updatePokemon(id: ObjectID, files: string[]) {
    let newPhoto: Pokemon[] = await this.pokemonRepository.find({
      where: { _id: id },
    });
  }

  async remove(id: ObjectID) {
    let newPokemon: Pokemon[] = await this.pokemonRepository.find({
      where: { _id: id },
    });

    return this.pokemonRepository.remove(newPokemon);
  }
}
