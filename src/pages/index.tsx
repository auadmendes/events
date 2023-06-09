import Head from 'next/head'
import { Feed } from '../components/Feed'
import { Container } from '../styles/Home'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <Container>
      <Head>

        <title>Event - ES</title>
        <meta name="description" content="Site of events from Espirito Santo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
    </Container>
  )
}
