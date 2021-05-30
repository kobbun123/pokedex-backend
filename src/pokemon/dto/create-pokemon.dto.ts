import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePokemonDto {
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
