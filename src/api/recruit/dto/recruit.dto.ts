import { IsArray, IsBoolean, IsDefined, IsOptional, IsString } from 'class-validator';

export class RecruitDto {
  @IsDefined()
  @IsString()
  readonly title: string;

  @IsDefined()
  @IsString()
  readonly startDate: string;

  @IsDefined()
  @IsString()
  readonly endDate: string;

  @IsDefined()
  @IsBoolean()
  readonly limit: boolean;

  @IsDefined()
  @IsString()
  readonly ability: string;

  @IsDefined()
  @IsString()
  readonly announce: string;

  @IsOptional()
  @IsArray()
  readonly keyword: string[];
}