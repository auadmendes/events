import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 2.5rem 0 7.5rem; */


`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme.colors.primary};

  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
  }
  label {
    color: ${({ theme }) => theme.colors.background};
  }

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      gap: 0.5rem;
    }

    select {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.text};
      padding: 1rem ;

      &::placeholder {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    textarea {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.text};
      padding: 1rem ;

      &::placeholder {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    input {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.text};
      padding: 1rem ;

      &::placeholder {
        color: ${({ theme }) => theme.colors.primary};
      }

      &:disabled {
        background: ${({ theme }) => theme.colors.gray_500};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.white};
        cursor: not-allowed;

        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.text};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: background-color 0.2s;

        &:hover {
          background: ${({ theme }) => theme.colors.green_600};
          color: ${({ theme }) => theme.colors.white};
          transition: background-color 0.2s;
        }

        &:disabled {
        background: ${({ theme }) => theme.colors.gray_500};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.white};
        cursor: not-allowed;

        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0,0,0, 0.77);
`