import { prisma } from "./prisma";

export async function getAllPosts(category_id: string) {
  const posts = await prisma.post.findMany({
    take: 10,
    where: {
      categoryId: {
        not: undefined || category_id,
        
      },
    },
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      caption: true,
      start_time: true,
      end_time: true,
      location: true,
      maxAttendees: true,
      price: true,
      eventUrl: true,
      user_email: true,
      user_image: true,
      user_name: true,
      categoryId: true
    }
  })

  // Fetch the category, likes, and attendees for all the posts
  const postsWithDetails = await Promise.all(posts.map(async (post) => {
    const category = await prisma.category.findUnique({
      where: {
        id: post.categoryId
      },
      select: {
        name: true
      }
    })

    const likes = await prisma.like.count({
      where: {
        post_id: post.id
      },
      select: {
        user_email: true,
        id: true
      }
    })

    const attendees = await prisma.attendee.count({
      where: {
        post_id: post.id
      },
      select: {
        user_email: true
      }
    })

    return {
      ...post,
      category: category, // add the category name to the post object
      likes: likes,
      attendees: attendees
    }
  }))

  return postsWithDetails
}

