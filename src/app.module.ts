import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlsController } from './urls/urls.controller';
import { UrlsService } from './urls/urls.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, UrlsController],
  providers: [AppService, UrlsService, PrismaService],
})
export class AppModule {}
