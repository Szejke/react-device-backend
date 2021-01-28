import { IsOptional, MaxLength, IsBoolean } from 'class-validator';
export class CreateDeviceDto {
  @MaxLength(30)
  name: string;
  @IsOptional()
  description?: string;
  @IsBoolean()
  disabled: boolean;
}
