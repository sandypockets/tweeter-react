import React, { useState } from 'react';
import './TweetForm.css';

export const TweetForm = props => {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState("")
  const tweetRemainingLength = 140 - tweetText.length;
  const outputStyle = {color: tweetRemainingLength >= 0 ? 'black' : 'red'};

  const submitTweet = event => {
    event.preventDefault();
    if(tweetRemainingLength > 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText("");
    }
  }

  return(
    <section id="write-new-tweet" className="new-tweet">
      <h2>Compose Tweet</h2>
      <div className="form-div">
        <form onSubmit={submitTweet} className="tweet-form" method="POST" action="/tweets">
          <label htmlFor="tweet-text">
          </label>
          <textarea name="text" id="tweet-text" placeholder="What are you humming about?" value={tweetText} onChange={event => setTweetText(event.target.value)} />
          <div>
            <button className="new-tweet-btn" type="submit">Tweet</button>
            <output style={outputStyle} name="counter" className="counter" htmlFor="tweet-text">{140 - tweetText.length}</output>
          </div>
        </form>
      </div>
      {tweetRemainingLength < 0 && <h3 className="error-exceed-chars">Your tweet is too long!</h3>}
    </section>
  )
}