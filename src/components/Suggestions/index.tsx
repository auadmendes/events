//import { faker } from "@faker-js/faker";
import { format } from 'date-fns';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, NameJob, Follow, HeadContent } from "./styles";
import {
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";

import { eventsCollections } from "@/src/lib/controller";

interface Avatar {
  photo: string;
  name: string;
  job: string;
}

type EventType = {
  id: string;
  title: string;
  imageUrl: string;
  start_time: string;
  timestamp: number;
  // Add more fields here as needed
}

export function Suggestions() {
  const [eventsSelected, setEventsSelected] = useState<EventType[]>([])

  //  const [avatar, setAvatar] = useState<Avatar[]>([])

  // useEffect(() => {

  //   const newAvatar = []

  //   for (let i = 0; i < 5; i++) {
  //     const photo = faker.image.avatar()
  //     const name = faker.name.firstName()
  //     const job = faker.name.jobTitle()


  //     newAvatar.push({ photo, name, job })
  //   }
  //   setAvatar(newAvatar)
  //   console.log(avatar, ' Avatar >>>')
  // }, [])


  async function getSelectedEvents() {
    const eventsQuery = query(eventsCollections, orderBy('timestamp', 'desc'), limit(10));
    const eventsSnapshot = await getDocs(eventsQuery);

    const events: EventType[] = eventsSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        imageUrl: data.imageUrl,
        timestamp: data.timestamp,
        start_time: format(new Date(data.start_time), "dd/MM/yyyy 'at' hh:mm a")
      }
    });

    setEventsSelected(events);
  }

  useEffect(() => {
    getSelectedEvents()
  }, [])

  return (
    <Container>

      <HeadContent>
        <span>Suggestions for your</span>
        <span>See All</span>
      </HeadContent>

      {eventsSelected.map((item) => (
        <div key={item.id}>

          <Image
            alt=""
            src={item.imageUrl}
            width={200}
            height={200}
          />

          <NameJob>
            <strong>{item.title}</strong>
            <span>{item.start_time}</span>
          </NameJob>

          <Follow>
            Engage
          </Follow>
        </div>
      ))}

    </Container>
  )
}