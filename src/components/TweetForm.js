import React from 'react';

export const TweetForm = () => {

  return(
    <section id="write-new-tweet" className="new-tweet">
      <h2>Compose Tweet</h2>
      <div className="form-div">
        <form className="tweet-form" method="POST" action="/tweets">
          <label htmlFor="tweet-text">
          </label>
          <textarea name="text" id="tweet-text" placeholder="What are you humming about?" />
          <div>
            <button className="new-tweet-btn" type="submit">Tweet</button>
            <output name="counter" className="counter" htmlFor="tweet-text">140</output>
          </div>
        </form>
      </div>
      <h3 className="error-exceed-chars">Your tweet is too long!</h3>
      <h3 className="error-empty-tweet">You can't submit an empty tweet!</h3>
    </section>
  )
}