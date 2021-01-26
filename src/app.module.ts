import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin123@projectemployer.qiijq.mongodb.net/dataBase?retryWrites=true&w=majority',
    ),
    DeviceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
