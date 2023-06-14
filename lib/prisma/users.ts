"use server";

import { Prisma } from "@prisma/client";
import { prisma } from ".";

export const updateName = async (
  email: string,
  update: Prisma.UserUpdateInput
) => {
  return await prisma.user.update({
    where: { email },
    data: { name: update.name },
  });
};
