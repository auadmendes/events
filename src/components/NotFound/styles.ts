import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 2rem;
  padding: 2rem;

  span {
    width: 10rem;
    z-index: 999;
  }

  div {
    width: 15rem;
    height: 15rem;
    z-index: 0;
  }

  @media (max-width: 720px) {
      flex-direction: column;
      gap: 2rem;
    }

`;