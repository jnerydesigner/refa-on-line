import { AppService } from '@application/services/app.service';
import { Module } from '@nestjs/common';
import { AppController } from '@presentation/controllers/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
