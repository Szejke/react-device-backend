import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Model } from 'mongoose';
import { Device } from './entities/device.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device.name)
    private DeviceModel: Model<Device>,
  ) {}

  async create(createDeviceDto: CreateDeviceDto) {
    const newWorker = await this.DeviceModel.create(createDeviceDto);
    return newWorker.save();
  }

  async findAll() {
    return await this.DeviceModel.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} device`;
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto) {
    await this.DeviceModel.findByIdAndUpdate(id, updateDeviceDto).exec();
  }

  async remove(id: string) {
    await this.DeviceModel.findByIdAndDelete(id).exec();
  }
}
