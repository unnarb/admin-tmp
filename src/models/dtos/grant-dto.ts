import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class GrantDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'set_key',
  })
  readonly key: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'set_type',
  })
  readonly type: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'set_subject_id',
  })
  readonly subjectId: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'sessionId',
  })
  readonly sessionId: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'set_clientId',
  })
  readonly clientId: string

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'description',
  })
  readonly description: string

  @IsDateString()
  @ApiProperty()
  readonly creationTime: Date

  @IsDateString()
  @ApiProperty({
    // add one day as an expiration example
    example: new Date(new Date().setTime(new Date().getTime() + 86400000)), //86400000 = nr of ms in one day
  })
  readonly expiration: Date

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  readonly consumedTime: Date

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'set_data',
  })
  readonly data: string
}
