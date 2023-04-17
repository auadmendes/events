import { Post } from "@/src/components/Post";
import { useEffect, useState } from "react";
import { Container } from "./styles";


import { NotFound } from "../NotFound";

const posts = [
  {
    id: '1',
    title: 'Wedding barbecue',
    username: 'auadmendes',
    userImg: 'https://avatars.githubusercontent.com/u/5294488?v=4',
    imageUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/55560671_10219542942626433_6457761291229462528_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=2ozAZ3TGGYoAX_9Fp29&_nc_ht=scontent-lax3-1.xx&oh=00_AfCEFWTceRRkOCtwlN3xbWd6EOhpjoHMojQiWzUPVjs82w&oe=644C0669',
    caption: 'Wedding anniversary barbecue',
    description: 'Starting at 10AM, you will need to bring your own meet and drink, the pool is free until 10PM as the barbecue. Send your name and the people you are going to bring and their Ids. It is forbidden smoke and carry your drink to the pool',
    start_time: '25/03/23: 10:00',
    end_time: '25/03/23: 22:00',
    location: 'https://goo.gl/maps/MMU78upRqXsN11yx9',
    category: 'Party',
    maxAttendees: '50',
    price: '',
    eventUrl: 'https://vixcomedyclub.com/agenda/',
    eventActive: true,
    priceActive: true,
    starred: '35',
    comments: [
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "xyz321",
        text: "Great event! I loved the food and music, many friends and the conversation was awesome, we played volley and eat cake.",
        timestamp: "2023-04-01T11:30:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "I had a blast!",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "I had a blast!",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "I had a blast!",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "Great event! I loved the food and music, many friends and the conversation was awesome, we played volley and eat cake.",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "I had a blast!",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "Great event! I loved the food and music, many friends and the conversation was awesome, we played volley and eat cake.",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "Great event! I loved the food and music, many friends and the conversation was awesome, we played volley and eat cake.",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "I had a blast!",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "I had a blast!",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "I had a blast!",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "I had a blast!",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "I had a blast!",
        timestamp: "2023-04-01T11:45:00Z"
      }
    ]
  },
  {
    id: '2',
    title: 'Treino na praia',
    username: 'kapitalfitness',
    userImg: 'https://avatars.githubusercontent.com/u/5294488?v=4',
    imageUrl: 'https://images.pexels.com/photos/5325476/pexels-photo-5325476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'On April 15 - Training at Manguinhos beach ',
    description: 'Bring your water and lets do an awesome training with Kapital Fitness. We have prepared a great breakfast, we are going to lunch at Cabana do Luiz.',
    start_time: '15/04/23: 06:00',
    end_time: '15/04/23: 15:00',
    location: 'https://goo.gl/maps/MMU78upRqXsN11yx9',
    category: 'Exercises',
    maxAttendees: '50',
    price: '80,00',
    eventUrl: 'https://vixcomedyclub.com/agenda/',
    eventActive: true,
    priceActive: true,
    starred: '',
    comments: [
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "xyz321",
        text: "I'm so excited to join",
        timestamp: "2023-04-01T11:30:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "What we have with this price?",
        timestamp: "2023-04-01T11:45:00Z"
      },
      {
        authorUrl: 'https://avatars.githubusercontent.com/u/5294488?v=4',
        authorName: 'Luciano',
        authorId: "uvw987",
        text: "Are there a minimal age to participate",
        timestamp: "2023-04-01T11:45:00Z"
      }
    ]
  },
  {
    id: '3',
    title: 'Skate challenge',
    username: 'auadmendes',
    userImg: 'https://avatars.githubusercontent.com/u/5294488?v=4',
    imageUrl: 'https://images.pexels.com/photos/1769553/pexels-photo-1769553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Next Saturday 25 - First Skate Challenge Serra',
    description: 'Will be this Saturday at Jacaraípe the first skate challenge Serra, guarantee your ticket and win a t-shirt',
    start_time: '25/03/23: 8:00',
    end_time: '25/03/23: 11:00',
    location: 'https://goo.gl/maps/MMU78upRqXsN11yx9',
    category: 'Party',
    maxAttendees: '50',
    price: '',
    eventUrl: 'https://vixcomedyclub.com/agenda/',
    eventActive: true,
    priceActive: true,
    starred: '217',
    comments: []
  },
]

interface FilterProps {
  variant: string | null;
}

interface PostType {
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
  category: {
    name: string
  },
  likes: {
    user_email: string
    id: string
  },
  attendees: {
    user_email: string
  }
}

export function Posts({ variant }: FilterProps) {
  const [data, setData] = useState<PostType[]>([]);




  useEffect(() => {

    async function getEvents() {
      let filterCategoryId

      if (variant === '') {
        filterCategoryId = undefined
      } else {
        filterCategoryId = variant
      }

      try {
        const response = await fetch(`/api/posts?category_id=${filterCategoryId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const eventsData = await response.json();
        setData(eventsData.data);

      } catch (err) {
        console.log('Error: ', err)
      }
    }


    getEvents()
    console.log('useEffect -------------------------------------------')
  }, [variant])

  if (data.length < 1) {
    return (
      <NotFound variant={String(variant)} />
      // <span>Nada</span>
    )
  }

  return (
    <Container>
      {data.map((post) => (
        <Post
          key={post.id}
          post={post}

        />
      ))}

    </Container>
  )
}

