import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';

@Module({
  controllers: [UrlsController],
  providers: [UrlsService, PrismaService],
})
export class UrlsModule {}