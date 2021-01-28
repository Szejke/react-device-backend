import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceEntity, Device } from './entities/device.entity';
import { DeviceController } from './device.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Device.name, schema: DeviceEntity }]),
  ],
  controllers: [DeviceController],
  providers: [DeviceService],
})
export class DeviceModule {}
