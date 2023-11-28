import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma-service';
import { PrismaTeamMemberRepository } from './prisma/prisma-team-member-repository';
import { TeamMemberRepository } from './repositories/team-member-repository';

// Modulo principal da aplicação
// Modulos por funcionalidade ou áreas do sistema (financeiro, cobrança, etc)
// Providers é qualquer coisa que não seja Controller (Service, Repositories, UseCase, etc)

// Toda vez que uma classe precisar do TeamMemberRepository será instanciado o PrismaTeamMemberRespository
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: TeamMemberRepository,
      useClass: PrismaTeamMemberRepository,
    },
  ],
})
export class AppModule {}
