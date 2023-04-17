import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    img {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;

    transition: all 0.2s;

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  svg {
    transition: all 0.2s;
    width: 1.5rem;
    
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};

    strong {
      font-size: 0.85rem;
      color: ${({ theme }) => theme.colors.gray_500};
    }

    span {
      font-size: 0.55rem;
    }
  }

  button {
    cursor: pointer;
    width: 40%;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.2s;

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;