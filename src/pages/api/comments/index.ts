import { getComments } from '@/src/lib/comments';
import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

interface CommentsType {
  id: string;
  user_email: string;
  post_id: string;
  user_image: string;
  user_name: string;
  comment: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  if (method === 'GET') {
    const { post_id } = req.query
    console.log('chegou na api de comments ID: ', post_id)
    const comments = await getComments(String(post_id))

    return res.status(200).json({
      data: comments
    })

  } else if (method === 'POST') {
    const {
      id,
      post_id,
      user_email,
      user_image,
      user_name,
      comment,
    }: CommentsType = req.body


    const comments = await prisma.comment.create({
      data: {
        id,
        post_id,
        user_email,
        user_image,
        user_name,
        comment
      }
    })

    console.log(comments)
    return res.status(200).json({
      data: comments
    })

  }

  return res.status(404).json({ message: 'Route not found' })
}