import React from 'react';
import { Tweet } from '../components/Tweet';

export default { title : 'Singular Tweet' };

export const emptyTweet = () => <Tweet />;

export const populatedTweet = () => {

  const singleTweet = {
    name: "Michael Scott",
    handle: "@greatscott",
    avatar: "https://i.imgur.com/2WZt0D6.png",
    text: "You miss 100% of the shots you don't take",
    date: "10 days ago"
  }

  /* The spread below achieves the same result */
/*   return <Tweet name={singleTweet.name}
                handle={singleTweet.handle}
                avatar={singleTweet.avatar}
                text={singleTweet.text}
                date={singleTweet.date}
              />; */

  return <Tweet {... singleTweet} />
};