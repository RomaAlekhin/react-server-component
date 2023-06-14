"use server";

import { Prisma } from "@prisma/client";
import { prisma } from ".";

export const updateUser = async (
  email: string,
  data: Prisma.UserUpdateInput
) => {
  return await prisma.user.update({ where: { email }, data });
};
