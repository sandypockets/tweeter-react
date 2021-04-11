import './App.css';
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { Tweet } from "./components/Tweet";


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
]


function App() {
  return (
    <div className="App">
      <div className={'page-container'}>
      <Navigation />
      <Profile />
      <main className={'container'}>
        <TweetForm />
        <section className={'tweets'}>
          <Tweet name={tweets[0].name} handle={tweets[0].handle} text={tweets[0].text} date={tweets[0].date}/>
          {/* Adding second tweet for styling/debugging */}
          <Tweet name={tweets[1].name} handle={tweets[1].handle} text={tweets[1].text} date={tweets[1].date}/>
        </section>
      </main>
      </div>
    </div>
  );
}

export default App;
