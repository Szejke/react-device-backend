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

  async findOne(id: string) {
    return await this.DeviceModel.findById(id);
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto) {
    return await this.DeviceModel.findByIdAndUpdate(id, updateDeviceDto, {
      new: true,
    });
  }

  async remove(id: string) {
    await this.DeviceModel.findByIdAndDelete(id).exec();
  }
}
