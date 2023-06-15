import { updateUser } from "../prisma/users";

export const updateName = async (email: string, name: string) => {
  return await updateUser(email, { name });
};
