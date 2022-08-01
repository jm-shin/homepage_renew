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
  @IsArray()
  @IsString({ each: true })
  readonly task: string[];

  @IsDefined()
  @IsArray()
  @IsString({ each: true })
  readonly ability: string[];

  @IsDefined()
  @IsArray()
  @IsString({ each: true })
  readonly announce: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly keyword: string[];

  @IsDefined()
  @IsArray()
  @IsString({ each: true })
  readonly default: string[];
}