import { prisma } from "../config/db.js";

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (name: string, email: string) => {
  return prisma.user.create({
    data: {
      name,
      email,
    },
  });
};

export const updateUser = async (id: string, name: string, email: string) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
    },
  });
};
