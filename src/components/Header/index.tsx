import { useSession } from "next-auth/react"
import * as Dialog from '@radix-ui/react-dialog';

import {
  Container,
  Logo,
  SearchBar,
  Menu,
  PlusButton
} from "./styles";

import {
  Calendar,
  MagnifyingGlass,
  House,
  PlusCircle,
  List,
  ChatCenteredDots,
  PushPinSimple,
  User
} from 'phosphor-react'
import Image from "next/image";
import Link from "next/link";
import { CreateEventModal } from "../CreateEventModal";

export function Header() {
  const { data: session } = useSession()

  return (
    <Container>
      <Logo href={'/'}>
        <Calendar size={32} />
        <span>Event-ES</span>
      </Logo>

      {/* <SearchBar>
        <MagnifyingGlass size={24} />
        <input type="text" placeholder="Search" />
      </SearchBar> */}

      <Menu>
        <span>
          <List size={24} />
        </span>
        <div>
          <House size={24} weight="fill" />
          <Link href={'#'}>
            <h6>3</h6>
            <ChatCenteredDots size={24} />
          </Link>

          <PushPinSimple size={24} />

        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <PlusButton>
              <PlusCircle size={24} />
            </PlusButton>
          </Dialog.Trigger>
          <CreateEventModal />
        </Dialog.Root>

        <Link href={'/Login'}>
          {session?.user ? (
            <Image src={String(session.user?.image)}
              width={200}
              height={200}
              alt="image of the user logged"
            />
          ) : (

            <User size={24} />
          )}

        </Link>

      </Menu>


    </Container>

  )
}