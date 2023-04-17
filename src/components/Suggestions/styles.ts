import { format } from 'date-fns'
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 0.5rem;
    
    gap: 0.5rem;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
    }

  }
`;

export const HeadContent = styled.div`
margin-bottom: 1rem;

span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray_500};
  }
`

export const NameJob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  strong {
    color: ${({ theme }) => theme.colors.gray_900};
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray_500};
  }
`;

export const Follow = styled.span`  
  color: ${({ theme }) => theme.colors.secondary}; 
`;