import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Iphone 11' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @ApiProperty({ example: 'Iphone-11' })
  @IsNotEmpty({ message: 'Slug cannot be empty' })
  slug: string;

  @ApiProperty({ example: 'Sản phẩm đẹp' })
  description: string;

  @ApiProperty({
    example: { screen_size: 123, memory: 128, pin: 100, ram: 64 },
  })
  @IsNotEmpty({ message: 'Specifications cannot be empty' })
  specifications: {
    screen_size: number;
    memory: number;
    pin: number;
    ram: number;
  };

  @ApiProperty({
    example: [
      {
        quantity: 20,
        price: 28,
        sold: 2,
        color: 'black',
        image: 'abc',
      },
    ],
  })
  @IsNotEmpty({ message: 'Type_items cannot be empty' })
  type_items: {
    quantity: number;
    price: number;
    sold: number;
    color: string;
    image: string;
  }[];

  @ApiProperty({ example: 'Iphone' })
  @IsNotEmpty({ message: 'Brand cannot be empty' })
  brand: string;

  @ApiProperty({ example: 'Smartphone' })
  @IsNotEmpty({ message: 'Category cannot be empty' })
  category: string;

  @ApiProperty({
    example: [
      {
        name: 'Voucher mùa hè',
        expiry: '2024-03-10T16:17:51.477+00:00',
        discount: 20,
      },
    ],
  })
  @IsNotEmpty({ message: 'Coupons cannot be empty' })
  coupons: {
    name: string;
    expiry: Date;
    discount: number;
  }[];
}
