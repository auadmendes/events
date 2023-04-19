import { useSession } from "next-auth/react"
import Image from "next/image";
import {
  Container,
  ImageContent,
  ImageCover,
  PostCreator,
  InformationContainer,
  EventDate,
  StartTime,
  Caption,
  Price,
  EndTime,
  Starred,
  Ticket,
  Category,
  Line,
  AttendeesContainer,
  Attendees,
  Pin,
  CommentsButton,
  Description,
  DescriptionContainer,
  CommentsContainer,
  CommentsContent,
} from "./styles";

import {
  MapPin,
  Star,
  Article,
  Chat,
  Smiley
} from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { Comments } from "../Comments";
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


interface CommentProps {
  id: string
  user_email: string;
  post_id: string;
  user_image: string;
  user_name: string;
  comment: string;
}

interface PostType {
  post: {
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
    },
  }
}

export function Post({ post }: PostType) {
  const [description, setDescription] = useState(false);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [comment, setComment] = useState('')

  const [likesCount, setLikesCount] = useState(0)
  const [emailHasLiked, setEmailHasLiked] = useState(false)

  const [hasAttend, setHasAttend] = useState(false)
  const [attendeesCount, setAttendeesCount] = useState(0)

  const [comments, setComments] = useState<CommentProps[]>([])


  const { data: session } = useSession()


  async function handleLike(post_id: string, user_email: string, like_id: string) {

    const response = await fetch('/api/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post_id,
        user_email: userEmail,
        like_id
      })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create like')
    }
    getLikesCount(post_id)
  }

  // async function getAttendeesCount(post_id: string) {
  //   const likesResponse = await fetch(`/api/attendees?post_id=${post_id}&user_email=${session?.user?.email}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },

  //   })
  //   const data = await likesResponse.json()
  //   const attendeesCount = data.data.count

  //   setAttendeesCount(attendeesCount)
  //   setHasAttend(data.data.hasAttend)

  //   return attendeesCount
  // }

  const getAttendeesCount = useCallback(async (post_id: string) => {
    const likesResponse = await fetch(`/api/attendees?post_id=${post_id}&user_email=${session?.user?.email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await likesResponse.json()
    const attendeesCount = data.data.count

    setAttendeesCount(attendeesCount)
    setHasAttend(data.data.hasAttend)

    return attendeesCount
  }, [session?.user?.email]);

  const getLikesCount = useCallback(async (post_id: string) => {
    const likesResponse = await fetch(`/api/likes?post_id=${post_id}&user_email=${session?.user?.email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await likesResponse.json();
    const likesCount = data.data.count;

    setLikesCount(likesCount);
    setEmailHasLiked(data.data.hasLiked);

    return likesCount;
  }, [session?.user?.email]);

  // async function getLikesCount(post_id: string) {
  //   const likesResponse = await fetch(`/api/likes?post_id=${post_id}&user_email=${session?.user?.email}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },

  //   })
  //   const data = await likesResponse.json()
  //   const likesCount = data.data.count

  //   setLikesCount(likesCount)
  //   setEmailHasLiked(data.data.hasLiked)
  //   return likesCount
  // }

  async function handleAttendee(post_id: string, user_email: string) {
    const response = await fetch('/api/attendees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post_id,
        user_email: userEmail,
        user_name: String(session?.user?.name)
      })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create like')
    }

    getAttendeesCount(post.id)

    return data
  }

  async function handleComments(post_id: string) {
    event?.preventDefault()

    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post_id,
        comment: comment,
        user_email: session?.user?.email,
        user_name: session?.user?.name,
        user_image: session?.user?.image,
      })
    })

    const data = await response.json()
    setComment('')
    getComments(post_id)

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create like')
    }

    return data
  }

  async function getComments(post_id: string) {
    event?.preventDefault()
    try {
      const response = await fetch(`/api/comments?post_id=${post_id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const commentsData = await response.json();
      setComments(commentsData.data);
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  useEffect(() => {
    if (session?.user) {
      setUserEmail(String(session?.user?.email))
    }

    getLikesCount(post.id)
    getAttendeesCount(post.id)

    console.log('affffffffffff')

  }, [session?.user, post.id, getAttendeesCount, getLikesCount])

  return (
    <Container>
      {/* <span>{attendeesCount}</span> */}
      <ImageContent>
        {comment}
        <PostCreator>
          <Image alt="" width={200} height={200} src={String(post.user_image)} />

          <div>
            <h3>{post.title}</h3>
            <span>by {post.user_name}</span>
          </div>
        </PostCreator>
        <ImageCover>
          <Image alt="" width={500} height={500} src={String(post.imageUrl)} />
        </ImageCover>
      </ImageContent>
      <InformationContainer>
        <EventDate>
          <StartTime>
            <span>Início:</span>
            {format(new Date(post.start_time), ` dd 'de ' MMMM 'de 'yyyy 'as' HH:mm`, { locale: ptBR })}
          </StartTime>
          <EndTime>
            <span>Termino:</span>
            {format(new Date(post.end_time), ` dd 'de ' MMMM 'de 'yyyy 'as' HH:mm`, { locale: ptBR })}
          </EndTime>
          <Category onClick={() => getLikesCount(post.id)}>{post.category.name}</Category>
          <Ticket>
            <a target="_blank" href={post.eventUrl}>Ticket</a>
          </Ticket>
          <Price>{String(post.price).length > 0 ? `R$${post.price}` : 'Free'}</Price>


        </EventDate>
      </InformationContainer>
      <Line />

      <AttendeesContainer disabled={!session?.user?.email?.length}>
        <Attendees
          onClick={() => { handleAttendee(post.id, post.user_email) }}
          variant={hasAttend}
        >
          <span>
            {attendeesCount} participando
          </span>
        </Attendees>
        <Starred
          onClick={() => { handleLike(post.id, post.user_email, post.likes.id) }}>
          {emailHasLiked === true ? (
            <div>
              <Star size={18} weight="fill"
                color='#F2A007'
              />
              {likesCount}
            </div>
          ) : (
            <div>
              <Star size={18} color="#ccc" /> {likesCount === 0 ? '' : likesCount}
            </div>
          )}
        </Starred>
        <Caption>{post.caption}</Caption>
        <Pin href={String(post.location)} target="_blank">
          <MapPin size={24} />
        </Pin>
        <CommentsButton onClick={() => getComments(post.id)}>
          <Chat onClick={() => { setIsCommentsVisible(!isCommentsVisible) }} size={24} />
        </CommentsButton>
        <Description>
          <Article
            onClick={() => { setDescription(!description) }}
            size={24} alt="See the Description" />
        </Description>
      </AttendeesContainer>

      {description && (
        <DescriptionContainer>
          <span>Description</span>
          <p>{post.description}</p>
        </DescriptionContainer>
      )
      }
      {isCommentsVisible && session?.user && (
        <CommentsContainer>
          <Comments commentsData={comments} />
          <CommentsContent>
            <Smiley size={24} />
            <input

              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Your comments"
            />
            <button
              type="submit"
              onClick={() => handleComments(post.id)}
            >
              Post
            </button>
          </CommentsContent>
        </CommentsContainer>
      )}

    </Container>
  )
}