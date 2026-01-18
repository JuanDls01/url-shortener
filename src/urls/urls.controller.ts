import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private urlsService: UrlsService) {}

  @Get(':shortCode')
  @Redirect()
  async findOne(@Param('shortCode') shortCode: string) {
    const url = await this.urlsService.findOne(shortCode);

    if (!url) {
      throw new NotFoundException('URL not found');
    }

    const redirectUrl = new URL(url.longUrl);
    redirectUrl.searchParams.set('ref', 'juanidls.dev');
    return { url: redirectUrl.toString() };
  }

  @Post()
  async create(@Body() createShortUrlDto: CreateShortUrlDto) {
    const url = await this.urlsService.create(createShortUrlDto.url);
    return { url };
  }
}
