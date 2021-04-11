import React, { useState } from 'react';
import './App.css';
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { Tweet } from "./components/Tweet";


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

  const addNewTweet = () => {
    const newTweet = {
        name: "Andy Bernard",
        handle: "@herecomestrebel",
        avatar: "https://i.imgur.com/2WZt0D6.png",
        text: "Do not test my politeness",
        date: "15 days ago"
    }
    setTweetData([newTweet, ...tweetData])
  }

  const tweets = tweetData.map((tweetData, index) => {
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} text={tweetData.text} date={tweetData.date}/>
  })

  return (
    <div className="App" onClick={addNewTweet}>
      <div className={'page-container'}>
      <Navigation />
      <Profile />
      <main className={'container'}>
        <TweetForm />
        <section className={'tweets'}>
          {tweets}
        </section>
      </main>
      </div>
    </div>
  );
}

export default App;
