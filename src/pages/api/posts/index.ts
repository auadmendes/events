
import { getAllPosts } from '@/src/lib/posts'
import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

interface PostType {
  data: {
  id: string;
  title: string;
  imageUrl: string;
  caption: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  maxAttendees: string;
  price: string;
  eventUrl: string;
  categoryId: string;
  user_name: string;
  user_image: string;
  user_email: string;
  eventActive: boolean;
   }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const { category_id } = req.query
  
  if(method === 'GET') {
    const posts = await getAllPosts(String(category_id))

    return res.status(200).json({ 
      data: posts 
    })

  } else if (method === 'POST') {
    const { 
      data
     }: PostType = req.body

     //console.log('!!!!!!!!!!!!!!!!!!!!!!!!! ', data)
    
    const posts = await prisma.post.create({
      data: {
        title: data.title,
        imageUrl: data.imageUrl,
        caption: data.caption,
        description: data.description,
        start_time: data.start_time,
        end_time: data.end_time,
        location: data.location,
        maxAttendees: data.maxAttendees,
        price: data.price,
        eventUrl: data.eventUrl,
        eventActive: data.eventActive,
        categoryId: data.categoryId,
        user_image: data.user_image,
        user_name: data.user_name,
        user_email: data.user_email
      }
    })
    //console.log(posts)
    return res.status(200).json({ 
      data: posts 
    })

  }


  return res.status(404).json({message: 'Route not found'})
}
