import './App.css';
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { Tweet } from "./components/Tweet";





function App() {
  return (
    <div className="App">
      <div className={'page-container'}>
      <Navigation />
      <Profile />
      <div className={'container'}>
        <TweetForm />
      <Tweet />
      </div>
      </div>
    </div>
  );
}

export default App;
