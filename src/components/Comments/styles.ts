import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const CommentList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 10rem;
`;

export const CommentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  gap: 2rem;

  svg {
      cursor: pointer;
      width: 32px;
      &:hover {
        color: ${({ theme }) => theme.colors.gray_900};
      }
    }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
    }
`;

export const CommentName = styled.span`
  font-size: 0.75rem;
`;

export const CommentText = styled.span`
  display: flex;
  font-size: 0.8rem;
  max-width: 90%;
  font-size: 0.75rem;
`;