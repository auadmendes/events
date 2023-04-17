import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, increment, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import { EventTypeProps, EventType } from '../types/events';
import { app } from "./firebase";
import { useState } from 'react';


type CommentType = {
  id?: string;
  name: string | undefined | null;
  userUrl?: string | undefined | null;
  commentText: string | undefined | null;
}

export const firestore = getFirestore(app);

//Hotels collections

export const eventsCollections = collection(firestore, 'events')


export async function addEvent(eventData: EventType) {
  const newEvent = await addDoc(eventsCollections, {...eventData})
  console.log('New event was created at ' + newEvent.path)
 
}

export async function updateEvent(id: string | undefined, docData: any) {
  const getEvent = doc(firestore, `events/${id}`)
  await setDoc(getEvent, docData, { merge: true})
}

export async function updateAttendees(id: string | undefined, incrementValue: number) {
  const eventRef = doc(firestore, `events/${id}`);

  try {
    await updateDoc(eventRef, { maxAttendees: increment(incrementValue) });
    console.log('Document successfully updated!');
  } catch (error) {
    console.error('Error updating document: ', error);
  }
}

export async function updateLikeEvent(eventId: string | undefined, authorEmail: string) {
  const eventRef = doc(firestore, `events/${eventId}`);
  const likesRef = collection(eventRef, 'likes');

  try {
    // Add a new 'like' document to the 'likes' subcollection with the authorEmail field
    const newLikeRef = await addDoc(likesRef, { authorEmail });

    // Update the 'likesCount' field on the parent event document
    await updateDoc(eventRef, { likesCount: increment(1) });

    console.log('Like added successfully!');
  } catch (error) {
    console.error('Error adding like: ', error);
  }
}

//Creates a comment passing an object to a sub collection called comments
export async function createComment(postId: string, comment: CommentType) {
  const postRef = doc(firestore, 'events', postId);
  const commentsRef = collection(postRef, 'comments');

  const newCommentRef = await addDoc(commentsRef, {
    name: comment.name,
    userUrl: comment.userUrl,
    comment: comment.commentText,
    timestamp: serverTimestamp()
  });

  console.log('Comment added successfully! >>> ', newCommentRef);
}

export let engaged = ''
export async function createEngagement(postId: string, userEmail: string, userName: string) {
  // Get the reference to the post and engages collection
  const postRef = doc(firestore, "events", postId);
  const engageRef = collection(postRef, "engages");

  // Query to check if there is an existing engagement for the user and post
  const queryRef = query(engageRef, where("userEmail", "==", userEmail), where("postId", "==", postId));
  const querySnapshot = await getDocs(queryRef);

  // If the user is already engaged, remove the existing engagement
  if (!querySnapshot.empty) {
    const existingEngageRef = querySnapshot.docs[0].ref;
    await deleteDoc(existingEngageRef);
    return
  }

  // Create a new engagement
  await addDoc(engageRef, {
    postId: postId,
    name: userName,
    userEmail: userEmail,
    timestamp: serverTimestamp()
  });

  // Get the number of documents in the engages collection for this post
  const engageQuery = query(engageRef);
  const engageSnapshot = await getDocs(engageQuery);
  const engagedCount = engageSnapshot.docs.length;
  
  engaged = String(engagedCount)
  return engagedCount;

}

interface Comment {
  id: string;
  name: string;
  comment: string;
  userUrl: string
}

export async function getPostComments(postId: string) {
  const postRef = doc(firestore, 'events', postId);
  const commentsRef = collection(postRef, 'comments');

  const commentsQuery = query(commentsRef, orderBy('timestamp', 'desc'))

  const querySnapshot = await getDocs(commentsQuery);

  const comments: Comment[] = []; // type comments as an array of Comment objects
  querySnapshot.forEach((doc) => {
    const commentData = doc.data();

    const commentInfo: Comment = {
      id: doc.id,
      name: commentData.name,
      comment: commentData.comment,
      userUrl: commentData.userUrl
    };

    comments.push(commentInfo);

  });

  //console.log('Comments retrieved successfully:', comments);
  return comments;
}