import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('api/order')
export class OrderController {
  constructor(private orderService: OrderService) {}
}
