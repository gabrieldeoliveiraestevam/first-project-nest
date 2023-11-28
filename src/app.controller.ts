import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberRequest } from './dtos/create-team-member-request';
import { TeamMemberRepository } from './repositories/team-member-repository';

// Controller - recebe requisições
// Inversão de dependência => As dependências da classe são enviadas no construtor
// Injeção de depedência => O nest resolve as dependências enviadas no construtor (injectable)
// Não é possível fazer injeção de dependência no Nest com interface e sim com classe ou classe abstrada
@Controller('app')
export class AppController {
  constructor(private primaService: TeamMemberRepository) {}

  // // Decorator para criação de rota
  // @Get('hello')
  // async getHello() {
  //   // Aciona o serviço do Prima para criar um membro na tabela TeamMember
  //   const newMember = await this.primaService.create({
  //     data: {
  //       name: 'Gabriel',
  //       function: 'Desenvolvedor',
  //     },
  //   });
  //   return newMember;
  // }

  @Post('createmember')
  async createMember(@Body() body: CreateTeamMemberRequest): Promise<any> {
    return await this.primaService.create(body.name, body.function);
  }
}
