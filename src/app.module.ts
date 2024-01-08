import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProposalsModule } from './proposals/proposals.module';

@Module({
  imports: [ProposalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
