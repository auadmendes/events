import styled from "styled-components";

export const Container = styled.main`
  width: 1020px;
  margin: 0 auto;
  margin-top: 2rem;
  gap: 1rem;
  display: flex;
  
  flex-direction: row;
  
  justify-content: center;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 100%;
      aside {
        visibility: hidden;
        height: 0.5px;
        width: 0.5px;
      }
    }


  section {
    max-width: auto;
    //background: blue;
    width: 65%;

    @media (max-width: 720px) {
      width: 100%;
    }
  }

  aside {
    width: 35%;
    padding: 0 1rem;
    //background: #ccc;

    @media (max-width: 420px) {
      display: none;
      width: 0px;
      height: 0px;
      visibility: hidden;
    }
  }
`;
