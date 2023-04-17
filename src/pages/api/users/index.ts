import { prisma } from '@/src/lib/prisma'
//import { getUsers } from '@/src/lib/users'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  // if(method === 'GET') {
  //   const users = await getUsers()

  //   return res.status(200).json({ 
  //     data: users 
  //   })

  // } else if (method === 'POST') {
  //   const { name, email } = req.body

  //   const user = await prisma.user.create({
  //     data: {
  //       name,
  //       email
  //     }
  //   })

  //   return res.status(200).json({ 
  //     data: user 
  //   })

  // }


  return res.status(404).json({message: 'Route not found'})
}

