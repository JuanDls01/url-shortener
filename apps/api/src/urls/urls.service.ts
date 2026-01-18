import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { toBase62 } from 'src/common/utils/base62';

@Injectable()
export class UrlsService {
  constructor(private prisma: PrismaService) {}

  async create(url: string) {
    const existing = await this.prisma.url.findFirst({
      where: { longUrl: url },
    });

    if (existing) {
      return existing;
    }

    return this.prisma.$transaction(async (tx) => {
      const created = await tx.url.create({
        data: { shortUrl: '_temp_', longUrl: url },
      });

      const shortUrl = toBase62(created.id);

      return tx.url.update({
        where: { id: created.id },
        data: { shortUrl },
      });
    });
  }

  async findOne(shortCode: string) {
    return this.prisma.url.findUnique({ where: { shortUrl: shortCode } });
  }
}
