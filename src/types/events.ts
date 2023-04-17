
export interface EventType {
  id?: string;
  title?: string;
  username?: string;
  userImg?: string;
  imageUrl?: string;
  caption?: string;
  description?: string;
  start_time?: string;
  end_time?: string;
  location?: string;
  category?: string;
  maxAttendees?: number;
  price?: string | undefined;
  eventUrl?: string;
  starred?: string | undefined;
  eventActive?: boolean;
  priceActive?: boolean;
  timestamp?: string;
  comments?:
  {
    authorId?: string;
    authorUrl?: string;
    authorName?: string
    text?: string;
    timestamp?: string;
  }[] | undefined
}
export interface EventTypeProps {
  post: {
    id?: string;
    title?: string;
    username?: string;
    userImg?: string;
    imageUrl?: string;
    caption?: string;
    description?: string;
    start_time?: string;
    end_time?: string;
    location?: string;
    category?: string;
    maxAttendees?: number;
    price?: string | undefined;
    eventUrl?: string;
    starred?: string | undefined;
    eventActive?: boolean;
    priceActive?: boolean;
    timestamp?: string;
    comments?:
    {
      authorId?: string;
      authorUrl?: string;
      authorName?: string
      text?: string;
      timestamp?: string;
    }[]
  }
}

export interface PostType {
  id:           string;
  title:        string;
  imageUrl:     string;
  caption:      string;
  description:  string;
  start_time:   string;
  end_time:     string;
  location:     string;
  maxAttendees: string;
  price:        string;
  eventUrl:     string;
  eventActive:  boolean;
  created_at:   string;
  updated_at:   string;
  categoryId:   string;
  userId:       string;
  user_image: string;
  user_email: string;
  user_name: string;
}