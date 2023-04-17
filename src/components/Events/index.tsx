import { useEffect, useState } from "react"

interface PostType {

  id: string;
  title: string;
  description: string;
  category: {
    name: string
  }
  likes: {
    user_email: string
  }
  attendees: {
    user_email: string
  }

  // add additional properties here as needed
}

export function Events() {
  const [data, setData] = useState<PostType[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function getEvents() {
    try {
      const response = await fetch('http://localhost:3000/api/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const eventsData = await response.json();
      setData(eventsData.data);
      console.log(eventsData.data, '  <<<<<>>>>>')
    } catch (err) {
      //setError(err.message);
    }
  }
  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div>
      <div>
        {data.map((item) => (
          <span key={item.id}>
            {item.title}
            {item.category.name}
            likes {item.likes.user_email}
          </span>

        ))}
        {/* {data.map((item) => (
          <span key={item.id}>{item.title}</span>
        ))} */}
      </div>
    </div>
  )
}

