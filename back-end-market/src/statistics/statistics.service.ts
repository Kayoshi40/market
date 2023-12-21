import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './../user/user.service';

@Injectable()
export class StatisticsService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async getMain(userId: number) {
    const user = await this.userService.byId(userId, {
      orders: {
        select: {
          id: true,
          items: true,
        },
      },
      reviews: true,
      favorites: true,
    });

    const totalPrice = async () => {
      try {
        const timeoutPromise = (timeout) =>
          new Promise((resolve) => setTimeout(resolve, timeout));
        const timeout = async () => {
          await timeoutPromise(1500);
          return '0';
        };
        timeout();
        const totalAmount = await this.prisma.orderItem.aggregate({
          where: {
            orderId: user.id,
          },
          _sum: {
            price: true,
          },
        });
        return totalAmount;
      } catch {
        return '0';
      }
    };

    return [
      {
        name: 'Order',
        value: user.orders.length,
      },
      {
        name: 'Reviews',
        value: user.reviews.length,
      },
      {
        name: 'Favorites',
        value: user.favorites.length,
      },
      {
        name: 'Total amount',
        value: totalPrice(),
      },
    ];
  }
}
