import { createCategories, getCategories } from '@/src/lib/categories'
import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  if(method === 'GET') {
    const categories = await getCategories()

    return res.status(200).json({ 
      data: categories 
    })

  } else if (method === 'POST') {
    const { name } = req.body

    const categories = await prisma.category.create({
      data: {
        name
      }
    })

    return res.status(200).json({ 
      data: categories 
    })

  }


  return res.status(404).json({message: 'Route not found'})
}
