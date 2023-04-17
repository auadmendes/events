
import { getLikes } from '@/src/lib/likes';
import { prisma } from '@/src/lib/prisma'

import type { NextApiRequest, NextApiResponse } from 'next'

interface LikesType {
  user_email: string;
  post_id: string;
  like_id: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  
  if (method === 'GET') {
    const { post_id, user_email } = req.query
    const likesCount = await getLikes(String(post_id), String(user_email))

    return res.status(200).json({
      data: {
        hasLiked: likesCount.hasLiked,
        count: likesCount.count
      }
    })

  } else if (method === 'POST') {
    const {
      post_id,
      user_email
    }: LikesType = req.body


    const existingLike = await prisma.like.findMany({
      where: {
        user_email: String(user_email)
      },
      select: {
        user_email: true
      }
    })

    const isLikeExist = existingLike[0]

    if (existingLike[0] === undefined) {
      
      //console.log('undefined ==========', existingLike[0])

      const likes = await prisma.like.create({
        data: {
          post_id,
          user_email: String(user_email)
        }
      })
  
      console.log(likes)
      return res.status(200).json({
        data: likes
      })

  
    }
    else {
      //console.log('existe')

      if (existingLike) {
        await prisma.like.deleteMany({
          where: {
            user_email
          }
        })
  
        return res.status(200).json({
          message: 'Like removed successfully'
        })
      }

    }  

  }
 

  return res.status(404).json({ message: 'Route not found' })
}
