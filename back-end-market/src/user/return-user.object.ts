/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';

export const returnUserObject: Prisma.UserSelect = {
  id: true,
  email: true,
  name: true,
  avatar: true,
  password: false,
  phone: true,
};
