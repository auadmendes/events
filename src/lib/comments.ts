import { prisma } from "./prisma";

export async function getComments(post_id: string) {
  const comments = await prisma.comment.findMany({
    where: {
      post_id: post_id
    },
    select: {
      user_name: true,
      user_image: true,
      comment: true

    }
  })

  return comments
}
