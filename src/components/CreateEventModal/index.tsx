import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react"
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  Container,
  Content,
  Overlay,
  CloseButton
} from "./styles";



interface CategoryProps {
  name: string;
  id: string;
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
  eventActive: boolean;
}

export function CreateEventModal() {

  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [descriptionLength, setDescriptionLength] = useState(0)

  //const [eventActive, setEventActive] = useState(true)

  const maxDescriptionLength = 1000

  const [title, setTitle] = useState('')
  const [caption, setCaption] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setAndDate] = useState('')
  const [eventUrl, setEventUrl] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [urlCover, setUrlCover] = useState('')

  const { data: session } = useSession()

  async function getCategories() {
    event?.preventDefault()
    try {
      const response = await fetch('/api/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const categories = await response.json();
      setCategories(categories.data);
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  async function handleCreatePost() {
    event?.preventDefault();

    const postData = {
      title: title,
      imageUrl: urlCover,
      caption: caption,
      description: description,
      start_time: startDate,
      end_time: endDate,
      location: location,
      maxAttendees: '35',
      price: price,
      eventUrl: eventUrl,
      categoryId: category,
      user_name: String(session?.user?.name),
      user_image: String(session?.user?.image),
      user_email: String(session?.user?.email),
      eventActive: true
    } as PostType

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: postData
      })
    })

    console.log('Create event ---------', postData)

  }

  function handleDescriptionChange(e: any) {
    event?.preventDefault()
    setDescription(e.target.value);
    setDescriptionLength(e.target.value.length);
  }

  useEffect(() => {
    getCategories()

  }, [])

  return (
    <Dialog.Portal>

      <Container>
        <Content>
          <Dialog.Title>New Event</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>
          {/* <span>{title}</span> */}
          {session?.user ? (
            <form action="">

              <input type="text" placeholder="Event title"
                onChange={(e) => setTitle(e.target.value)} />


              <input type="text" placeholder="Caption, máx 40 letters"
                maxLength={40} onChange={(e) => setCaption(e.target.value)} />

              <textarea placeholder="URL image cover"
                onChange={(e) => setUrlCover(e.target.value)} />

              <label htmlFor="">
                <span>Máximo de letras </span>
                <span>{maxDescriptionLength - descriptionLength} restante</span>
              </label>
              <textarea placeholder="Description"
                onChange={handleDescriptionChange} />

              <input type="datetime-local" name="start_date" id=""
                onChange={(e) => setStartDate(e.target.value)} />

              <input type="datetime-local" name="end_date" id=""
                onChange={(e) => setAndDate(e.target.value)} />

              <input type="text" placeholder="Location URL"
                onChange={(e) => setLocation(e.target.value)} />

              <label about="Categories">Choose a category:</label>

              <select id="categories" name="categories"
                onChange={(e) => setCategory(e.target.value)}>

                <option value="">--Select a category--</option>

                {categories.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}

              </select>

              <input type="text" placeholder="Price"
                onChange={(e) => setPrice(e.target.value)} />

              <input type="text" placeholder="URL of your page"
                onChange={(e) => setEventUrl(e.target.value)} />

              <button type='submit' onClick={handleCreatePost}>
                Create event
              </button>
            </form>
          ) : (
            <span>Você precisa estar logado para criar um evento!</span>
          )}

        </Content>
      </Container>
      <Overlay />
    </Dialog.Portal>
  )
}