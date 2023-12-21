/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import { returnCategoryObject } from 'src/category/return-category';
import { returnReviewObject } from 'src/review/return-review';

export const returnProductObject: Prisma.ProductSelect = {
  images: true,
  description: true,
  id: true,
  name: true,
  price: true,
  createdAt: true,
  slug: true,
  reviews: {
    select: returnReviewObject,
  },
  category: { select: returnCategoryObject },
};

export const returnProductObjectFullest: Prisma.ProductSelect = {
  ...returnProductObject,
};
