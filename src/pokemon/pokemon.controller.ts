import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { ObjectID } from 'typeorm';

@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @ApiOperation({ summary: 'Create pokemon' })
  async create(@Body() createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  @ApiOperation({ summary: 'FindAll pokemon' })
  findAll(@Query('searchText') searchText: string) {
    return this.pokemonService.findAll(searchText);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiOperation({ summary: 'FindOne pokemon' })
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectID) {
    return this.pokemonService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiOperation({ summary: 'Update pokemon' })
  update(
    @Param('id', ParseObjectIdPipe) id: ObjectID,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ) {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiOperation({ summary: 'Remove pokemon' })
  remove(@Param('id', ParseObjectIdPipe) id: ObjectID) {
    return this.pokemonService.remove(id);
  }
}
