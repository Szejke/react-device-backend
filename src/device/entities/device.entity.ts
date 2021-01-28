import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Device extends Document {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  disabled: boolean;
}

export const DeviceEntity = SchemaFactory.createForClass(Device);
