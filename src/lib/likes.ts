import { prisma } from "./prisma"

export async function createLikes(post_id: string, user_email: string) {
  const likes = await prisma.like.create({
    data: {
      user_email,
      post_id
    }
  })

  return likes
}

export async function getLikes(post_id: string, user_email: string) {
  const likes = await prisma.like.findMany({
    where: {
      post_id,
    },
    select: {
      user_email: true,
    },
  });

  const count = likes.length;
  const user_emails = likes.map((like) => like.user_email);
  const hasLiked = user_emails.includes(user_email);

  return { count, hasLiked };
}

