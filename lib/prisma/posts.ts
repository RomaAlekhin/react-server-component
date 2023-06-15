"use server";

import { Prisma } from "@prisma/client";
import { prisma } from ".";

export const createPost = async (
  authorId: string,
  post: Prisma.PostCreateInput
) => {
  return await prisma.post.create({
    data: { ...post, author: { connect: { id: authorId } } },
  });
};

export const updatePost = async (id: string, data: Prisma.PostCreateInput) => {
  return await prisma.post.update({ where: { id }, data });
};

export const getPosts = async () => {
  return await prisma.post.findMany({ include: { author: true } });
};

export const getPost = async (id: string) => {
  return await prisma.post.findUnique({ where: { id } });
};

export const getPostComments = async (postId: string) => {
  return await prisma.comment.findMany({ where: { postId } });
};
