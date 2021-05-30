import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {
  @ApiProperty()
  @IsNotEmpty()
  pokemonName: string;

  @ApiProperty()
  @IsNotEmpty()
  pokemonType: string;

  @ApiProperty()
  @IsNotEmpty()
  pokemonPhoto: string[];
}
