import Image from "next/image";
import { Heart } from "phosphor-react";

import {
  Container,
  CommentList,
  CommentContent,
  Content,
  CommentName,
  CommentText
} from "./styles";

interface Comment {
  id: string
  user_email: string;
  post_id: string;
  user_image: string;
  user_name: string;
  comment: string;
}

interface CommentProps {
  commentsData: Comment[];
}

export function Comments(commentsData: CommentProps) {

  return (
    <Container>
      <CommentList>
        <span>{commentsData.commentsData.length} comments</span>
        {commentsData.commentsData.map((comment: Comment) => (
          <CommentContent key={comment.id}>
            <Content>
              <Image alt="" src={comment.user_image} width={200} height={200} />
              <CommentName>{comment.user_name}</CommentName>
              <CommentText>{comment.comment}</CommentText>
            </Content>
            <div>
              <Heart size={24} />
            </div>
          </CommentContent>
        ))}
      </CommentList>
    </Container>
  )
}