import React, { useState } from 'react';
import './App.css';
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { Tweet } from "./components/Tweet";
import { Tweets } from './components/Tweets';


const initialTweetData = [
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
]


function App() {
  const [tweetData, setTweetData] = useState(initialTweetData)

  const addNewTweet = (text) => {
    const newTweet = {
        name: "Andy Bernard",
        handle: "@herecomestrebel",
        avatar: "https://i.imgur.com/2WZt0D6.png",
        text,
        date: "15 days ago"
    }
    setTweetData([newTweet, ...tweetData])
  }

  return (
    <div className="App">
      <div className={'page-container'}>
      <Navigation className={'content-container'} />
      <Profile className={'content-container'} />
      <main className={'container'}>
        <TweetForm addNewTweet={addNewTweet} />
        <Tweets tweetData={tweetData} />
      </main>
      </div>
    </div>
  );
}

export default App;
