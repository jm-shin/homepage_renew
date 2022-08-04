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
  @IsBoolean()
  readonly done: boolean;

  @IsDefined()
  @IsString()
  readonly task: string;

  @IsDefined()
  @IsString()
  readonly ability: string;

  @IsDefined()
  @IsString()
  readonly announce: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly keyword: string[];
}