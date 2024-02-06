import { Module } from '@nestjs/common';
import { BidsController } from './bids.controller';

@Module({
  controllers: [BidsController]
})
export class BidsModule {}
