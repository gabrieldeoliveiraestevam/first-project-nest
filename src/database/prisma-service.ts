import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Instancia o PrismaClient e a conexão do banco de dados é automática
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // Força a execução com o banco de dados
  async onModuleInit() {
    await this.$connect();
  }

  // // Fecha a aplicação caso o banco de dados pare de funcionar
  // async enableShutdownHooks(app: INestApplication) {
  //   this.$on('beforeExist', async () => {
  //     await app.close();
  //   });
  // }
}
