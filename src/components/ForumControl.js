import React from 'react';
import ThreadList from "./ThreadList";
import ThreadDetail from "./ThreadDetail";
import { v4 } from "uuid";
import NewPostForm from './NewPostForm';
import NewThreadForm from './NewThreadForm';

const threadList = [
  {
    title: "A kitten snuggling an octopus",
    userName: "catlover97",
    message: "Look at how adorable this kitten is!!! They are best friends",
    dateTime: new Date().toString(),
    voteTotal: 23,
    threadId: v4()
  },
  {
    title: "An octopus eating a kitten",
    userName: "OctoPodopus",
    message: "This is the best I hate kittens",
    dateTime: new Date().toString(),
    voteTotal: -16,
    threadId: v4()
  },
]

const postList = [
  {
    userName: "OctoPodopus",
    message: "Wow I hate this",
    dateTime: new Date().toString(),
    voteTotal: -6,
    threadId: threadList[0].threadId,
    postId: v4()
  },
  {
    userName: "KittenChampion",
    message: "Actually this is good",
    dateTime: new Date().toString(),
    voteTotal: 1000,
    threadId: threadList[0].threadId,
    postId: v4()
  },
  {
    userName: "OctopusHater05",
    message: "Uggggh disgusting!",
    dateTime: new Date().toString(),
    voteTotal: 0,
    threadId: threadList[1].threadId,
    postId: v4()
  },
  {
    userName: "8ArmsBestArms",
    message: "Wow I'm really surprised to see so much OctoHate",
    dateTime: new Date().toString(),
    voteTotal: 238,
    threadId: threadList[1].threadId,
    postId: v4()
  },
]

function ForumControl(props) {
  return (
    <React.Fragment>
      <ThreadList threadList={threadList}/>
      <hr/>
      <hr/>
      <ThreadDetail 
        thread={threadList[0]} 
        postList={postList.filter(post => post.threadId === threadList[0].threadId)}
      />
      <hr/>
      <hr/>
      <ThreadDetail
        thread={threadList[1]} 
        postList={postList.filter(post => post.threadId === threadList[1].threadId)}
      />
      <hr/>
      <hr/>
      <NewPostForm/>
      <hr/>
      <hr/>
      <NewThreadForm/>
    </React.Fragment>
  );
}

export default ForumControl;