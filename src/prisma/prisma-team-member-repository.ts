import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma-service';
import { TeamMemberRepository } from 'src/repositories/team-member-repository';

@Injectable()
export class PrismaTeamMemberRepository implements TeamMemberRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, memberFunction: string): Promise<any> {
    return await this.prisma.teamMember.create({
      data: {
        name: name,
        function: memberFunction,
      },
    });
  }
}
