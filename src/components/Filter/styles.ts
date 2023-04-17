import styled from "styled-components";

import * as RadioGroup from '@radix-ui/react-radio-group';

export const Container = styled.div`
  display: flex;
  //height: 4rem;
  overflow: auto;
  scrollbar-width: 0.5px;

  padding: 1rem;
  //border: 0.5px solid ${({ theme }) => theme.colors.gray_500};

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  
::-webkit-scrollbar {
  color: red;
  width: 10px;
}

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    

    color: white;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      border: 1px solid ${({ theme }) => theme.colors.pink};
      transition: all 0.2s;

      cursor: pointer;

      &:hover {
        width: 3.5rem;
        height: 3.5rem;
        
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
    }

    span {
      color: ${({ theme }) => theme.colors.gray_500};
      font-size: 0.75rem;
    }
  }
`;

interface ButtonProps {
  checked: boolean;
}

export const ParamsContainer = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: auto;
  scrollbar-width: 0.5px;

  padding: 1rem 1rem;
  padding-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  
::-webkit-scrollbar {
  color: red;
  width: 10px;
}

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

`;

interface FilterTypeProps {
  variant: 'checked';
}

export const FilterTypeButton = styled(RadioGroup.Item)<FilterTypeProps>`
  //background-color: ${(props) => props.theme.colors.gray};
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray_900};
  text-transform: capitalize;


  &[data-state='unchecked'] {
    background: ${(props) => props.theme.colors.gray};
  } 

  &[data-state='checked'] {
    background: ${(props) => props.variant === 'checked' ? props.theme.colors.primary : props.theme.colors.gray};

    color: ${(props) => props.variant === 'checked' ? props.theme.colors.white : props.theme.colors.gray_900};

  }
`