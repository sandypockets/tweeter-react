import React from 'react';
import { Tweets } from '../components/Tweets';

export default { title : 'Tweet Container' };

export const emptyTweet = () => <Tweets />;

export const populatedTweet = () => {
  const tweets = [
    {
      name: "Michael Scott",
      handle: "@greatscott",
      avatar: "https://i.imgur.com/2WZt0D6.png",
      text: "You miss 100% of the shots you don't take",
      date: "10 days ago"
    },
    {
      name: "Andy Bernard",
      handle: "@herecomestrebel",
      avatar: "https://i.imgur.com/2WZt0D6.png",
      text: "Do not test my politeness",
      date: "12 days ago"
    }
  ];
  return <Tweets tweetData={tweets} />
};