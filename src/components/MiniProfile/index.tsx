import { useSession, signOut } from "next-auth/react"
import { User } from 'phosphor-react'
import Image from "next/image";
import { Container } from "./styles";
import Link from "next/link";

export function MiniProfile() {
  const { data: session } = useSession()
  return (
    <Container>
      {session?.user ? (
        <Link href={'/Login'}>
          <Image
            alt=""
            src={String(session?.user?.image)}
            width={200}
            height={200}
          />
        </Link>
      ) : (
        <Link href={'/Login'}>
          <User size={32} />
        </Link>
      )}

      {session?.user ? (
        <div>
          <strong>{String(session?.user?.name)}</strong>
          <span>Welcome to Event-ES</span>
        </div>
      ) : (
        <div>
          <strong>You are not logged yet</strong>
        </div>
      )}

      <button onClick={() => signOut()}>
        Sign Out
      </button>
    </Container>
  )
}