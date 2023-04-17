import { prisma } from "./prisma";

export async function getAllEvents() {
  const events = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      description: true
    }
  })

  return events
}