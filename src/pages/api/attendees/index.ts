import { getAttendees } from '@/src/lib/attendees';
import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

interface AttendeesType {
  user_email: string;
  post_id: string;
  user_name: string;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  
  if (method === 'GET') {
    const { post_id, user_email, user_name } = req.query
    const attendeesCount = await getAttendees(String(post_id), String(user_email))

    return res.status(200).json({
      data: {
        hasAttend: attendeesCount.hasAttend,
        count: attendeesCount.count
      }
    })

  } else if (method === 'POST') {
    const {
      post_id,
      user_email,
      user_name
    }: AttendeesType = req.body


    const existingAttendee = await prisma.attendee.findMany({
      where: {
        user_email: String(user_email)
      },
      select: {
        user_email: true,
        user_name: true
      }
    })

    const isAttendeesExist = existingAttendee[0]

    if (existingAttendee[0] === undefined) {
      
      console.log('undefined ==========', existingAttendee[0])

      const attendees = await prisma.attendee.create({
        data: {
          post_id,
          user_email: String(user_email),
          user_name
        }
      })
  
      console.log(attendees)
      return res.status(200).json({
        data: attendees
      })

  
    }
    else {
      //console.log('existe')

      if (isAttendeesExist) {
        console.log(' fucking user email >>>> ', user_email)
        await prisma.attendee.deleteMany({
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
