import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 0;
  gap: 0.25rem;
  z-index: 999;

  padding: 1rem 5rem;
  height: 3.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  -webkit-box-shadow: 0 4px 6px -8px #222;
  -moz-box-shadow: 0 4px 6px -8px #222;
  box-shadow: 0 4px 6px -8px #222;

  @media (max-width: 720px) {
      padding: 1rem 1rem;
    }

`;
export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  cursor: pointer;
  span {
    font-size: 1.5rem;
  }

  @media (max-width: 720px) {
      span {
        width: 1px;
        visibility: hidden;
      }
    }

`;

export const SearchBar = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 0.25rem;
    padding-right: 0.25rem;

    height: 2rem;
    border-radius: 7px;
    min-width: 14rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};

    svg {
      cursor: text;
      color: ${({ theme }) => theme.colors.primary};
    }

  input {
    height: 100%;
    width: 100%;
    border: 0;
    outline: none;
  }

`;

export const Menu = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    cursor: pointer;
    
    svg {
      transition: height 0.2s;
      color: ${({ theme }) => theme.colors.primary};

    &:hover {
      height: 2.5rem;
      color: ${({ theme }) => theme.colors.gray_900};
      }

    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;

    cursor: pointer;

    color: ${({ theme }) => theme.colors.primary};

    svg {
      transition: width 2s;
      transition: height 0.2s;

      &:hover {
        width: 1.5rem;
        height: 2.5rem;
        color: ${({ theme }) => theme.colors.gray_900};
      }
    }


    a {
      display: flex;
      align-items: center;
      flex-direction: column;

      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;

      h6 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1rem;
        height: 1rem;
        margin-bottom: -0.75rem;
        margin-left: 0.75rem;
        background: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.background};
        //padding: 0.15rem;
        border-radius: 99px;

        z-index: 99;
      }
      
    }
    
  }

  a {
    svg {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};

          &:hover {
          color: ${({ theme }) => theme.colors.gray_900};
        }
      }
  }

  img {
      width: 2.5rem;
      height: 2.5rem;

      border: 0.5px solid ${({ theme }) => theme.colors.primary};
      border-radius: 99px;
    }

  @media (max-width: 1960px) {
      div {
        visibility: visible;
      }
      span {
        width: 1px;
        visibility: hidden;
      }
    }
  @media (max-width: 720px) {
      span {
        width: 1px;
        visibility: visible;
        margin-right: 1rem;
      }

      div {
        width: 1px;
        visibility: hidden;
      }
    }
`;

export const PlusButton = styled.button`
  border: 0;
  background-color: transparent;

  svg {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};

        &:hover {
        color: ${({ theme }) => theme.colors.gray_900};
      }
    }
`;