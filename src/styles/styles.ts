import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 100%;
  max-height: 100%;
  height: 100%;
  padding-top: 10rem;
  

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30rem;
    gap: 0.2rem;
    background: ${({ theme}) => theme.colors.primary};
    padding: 5rem;
    border-radius: 3px;

    input {
      border: 0;
      width: 100%;
      height: 2rem;
      border-radius: 4px;

      padding: 0.5rem;
    }

    button {
      border: 0;
      width: 100%;
      height: 2rem;
      border-radius: 2px;
    }
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  border: 0;
  width: 100%;
  height: 2rem;
  border-radius: 2px;
  background: ${({ theme}) => theme.colors.secondary};
  color: ${({ theme}) => theme.colors.white};
`;
export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  border: 0;
  width: 100%;
  height: 2rem;
  border-radius: 2px;
  background: ${({ theme}) => theme.colors.red};
  color: ${({ theme}) => theme.colors.white};
`;
export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  border: 0;
  width: 100%;
  height: 2rem;
  border-radius: 2px;
  background: ${({ theme}) => theme.colors.secondary};
  color: ${({ theme}) => theme.colors.white};
`;
