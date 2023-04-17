import Link from "next/link";
import styled from "styled-components";
import css from "styled-jsx/css";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  //max-height: 47rem;
  overflow: auto;
  scrollbar-width: 0.5px;
  
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
  color: red;
  width: 1px;
}
`;

export const ImageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PostCreator = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    margin-left: 0.5rem;
    

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
    }

    div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.gray_900};
      }
    }

    @media (max-width: 720px) {
      margin-top: 1rem;
    }
`;

export const ImageCover = styled.div`
  display: flex;

  img {
    width: 100%;
    display: flex;
    object-fit: cover;
    
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem;
`;

export const EventDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.span`
  display: flex;

  padding: 0.3rem 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 720px) {
    padding: 1.1rem 0.5rem;
  }
`;

export const StartTime = styled.span` 
  max-height: 3.5rem;
  display: flex;
  padding: 0.5rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 3px;
  //background: ${({ theme }) => theme.colors.primary};
  border: 0.5px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  gap: 0.1rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    height: 3.5rem;
  }
`;

export const EndTime = styled.span`
  max-height: 3.5rem;
  display: flex;
  padding: 0.5rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 3px;
  //background: ${({ theme }) => theme.colors.gray};
  border: 0.5px solid ${({ theme }) => theme.colors.primary};
  text-align: center;
  gap: 0.1rem;
  transition: background-color 0.2s;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    height: 3.5rem;
  }
`;

export const Category = styled.span`
  display: flex;
  padding: 0.5rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 3px;
  //background: ${({ theme }) => theme.colors.gray};
  border: 0.5px solid ${({ theme }) => theme.colors.primary};
  text-align: center;
  gap: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 720px) {
    padding: 1.2rem 0.5rem;
    height: 3.5rem;
  }

`;

export const Ticket = styled.span`
  max-height: 3.5rem;
  padding: 0.5rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 3px;
  //background: ${({ theme }) => theme.colors.pink};
  border: 0.5px solid ${({ theme }) => theme.colors.primary};
  text-align: center;

  transition: background-color 0.2s;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
     
    a {
      color: ${({ theme }) => theme.colors.white};
     }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray_900};
  }

  @media (max-width: 720px) {
    padding: 1.2rem 0.5rem;
  }
`;

export const Starred = styled.div`
  //max-height: 3.5rem;
  padding: 0.4rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 3px;
  //text-align: center;
  cursor: pointer;
  border: 0.5px solid ${({ theme }) => theme.colors.primary};
  transition: background-color 0.2s;
  

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 720px) {
    padding: 1.1rem 0.5rem;
  }
`;

export const Line = styled.div`
  width: 90%;
  height: 1px;
  background: ${({ theme }) => theme.colors.gray};
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 0, 1rem;

  @media (max-width: 720px) {
    width: 100%;
    height: 10px;
    //background: ${({ theme }) => theme.colors.red};
    }
`;

interface AttendeeContainerProps {
  disabled: boolean;
}

export const AttendeesContainer = styled.div<AttendeeContainerProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;

  background-color: ${props => props.disabled ? props.theme.colors.yellow : null};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  opacity: ${props => props.disabled ? '0.5' : '1'};

`;

interface AttendeeProps {
  variant: boolean
}

export const Attendees = styled.div<AttendeeProps>`
  max-height: 3.5rem;
  padding: 0.4rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  border: 0.5px solid ${({ theme }) => theme.colors.primary};
  transition: background-color 0.2s;

  background: ${(props) => props.variant ? props.theme.colors.yellow : null};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

// interface AttendeeProps {
//   variant: boolean
// }

// export const CountAttendee = styled.div<AttendeeProps>`
//   background: ${(props) => props.variant ? props.theme.colors.yellow : props.theme.colors.yellow};
// `;

export const Caption = styled.span`
  max-height: 3.5rem;
  padding: 0.4rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 3px;
  border: 0.5px solid ${({ theme }) => theme.colors.primary};
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Pin = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;

  svg {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const CommentsButton = styled.div`
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
export const Description = styled.div`
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.primary};
    
    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0.4rem 0.5rem;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray_500};
  margin-bottom: 1.5rem;

  p {
    font-size: 1.1rem;
    line-height: 1.7rem;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0.4rem 0.5rem;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray_500};
  
  p {
    font-size: 0.75rem;
  }
`;

export const CommentsContent = styled.form`

display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
gap: 0.5rem;
margin-bottom: 1rem;

    input {
    padding:0.2rem 0.5rem;
    padding-top: 0.5rem;
    width: 100%;
    height: 2rem;
    min-height: 2rem;
    max-height: 10rem;
    border-radius: 4px;
    border: 0.5px solid ${({ theme }) => theme.colors.gray};
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    &:hover {
      color: ${({ theme}) => theme.colors.yellow};
    }
  }
`;