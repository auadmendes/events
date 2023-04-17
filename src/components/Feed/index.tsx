import { useState } from "react";
import { Filter } from "../Filter";

import { MiniProfile } from "../MiniProfile";
import { Posts } from "../Posts";

import { Suggestions } from "../Suggestions";
import { Container } from "./styles";
import { Events } from "../Events";

export function Feed() {
  const [filter, setFilter] = useState('')

  function selectFilter(e: string) {
    setFilter(e)
  }

  return (
    <Container>
      <section>
        <Filter onclick={selectFilter} />
        {/* <span>{filter}</span> */}

        <Posts variant={filter} />

        {/* <Events /> */}
      </section>

      <aside>
        <MiniProfile />
        {/* <Suggestions /> */}

      </aside>
    </Container>
  )
}