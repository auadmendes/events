import { useState } from "react";

import { Container } from "./styles";
import Lottie from "lottie-react";


import free from '../../../public/free.json'
import paid from '../../../public/paid.json'
import sports from '../../../public/sports.json'
import party from '../../../public/party.json'
import gym from '../../../public/gym.json'
import workshop from '../../../public/workshop.json'
import cosplay from '../../../public/cosplay.json'

interface Props {
  variant: string;
}

export function NotFound({ variant }: Props) {

  return (
    <Container>
      <span>
        Sorry, nobody posted a <strong>{variant}</strong> event yet
      </span>
      <div>
        {variant !== '' ? <Lottie animationData={gym} /> : null}
        {variant === 'cosplay' ? <Lottie animationData={cosplay} /> : null}
        {variant === 'free' ? <Lottie animationData={free} /> : null}
        {variant === 'paid' ? <Lottie animationData={paid} /> : null}
        {variant === 'sports' ? <Lottie animationData={sports} /> : null}
        {variant === 'party' ? <Lottie animationData={party} /> : null}
        {variant === 'workshop' ? <Lottie animationData={workshop} /> : null}
      </div>
    </Container>
  )
}