import { prisma } from "./prisma";

export async function getAttendees(post_id: string, user_email: string) {
  const attendees = await prisma.attendee.findMany({
    where: {
      post_id,
    },
    select: {
      user_email: true,
    },
  });

  const count = attendees.length;
  const user_emails = attendees.map((like) => like.user_email);
  const hasAttend = user_emails.includes(user_email);

  return { count, hasAttend };
}