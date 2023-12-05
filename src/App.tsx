import { useEffect, useState } from 'react'
import Axios from 'axios'
import './App.css'

function App() {
  const [user, setUser] = useState('octocat');
  const [fact, setFact] = useState('');
  const [colorMode, setColorMode] = useState('dark');
  
  const fetchData = () => {
    Axios.get(`https://api.github.com/users/${user}`).then((res) => {
    setFact(res.data);
  });
  }

  useEffect(fetchData, []);

  return (
    <>
    <input type="text" placeholder='Search GitHub username…' onChange={(e) => {
      setUser(e.target.value);
    }}/>
    <button type="button" onClick={fetchData}>Search</button>
    {/* <p className={`error ${user != null ? "hide": "show"}`}>User not found</p>
    <p className={`error ${user != '' ? "hide": "show"}`}>Input is required</p> */}
    <div className="card">
    <h1 className='title'>{fact.name != null ? fact.name: fact.login}</h1>
    <p className="username">@{fact.name != null ? fact.login: ""}</p>
    <p className="joined">Joined {fact.created_at != null ? fact.created_at: "Not Available"}</p>
    <p className="bio">{fact.bio != null ? fact.bio: "This profile has no bio"}</p>
    <img src={fact.avatar_url != null ? fact.avatar_url: "Not Available"} alt="" />
    <div className="info">
    <h3 className="repos">Repos: {fact.public_repos != null ? fact.public_repos: "Not Available"}</h3>
    <h3 className="followers">Followers: {fact.followers != null ? fact.followers: "Not Available"}</h3>
    <h3 className="following">Following: {fact.following != null ? fact.following: "Not Available"}</h3>
    </div>
    <p className="location">{fact.location != null ? fact.location: "Not Available"}</p>
    <p className="blog">{fact.blog != null ? fact.blog: "Not Available"}</p>
    <p className="twitter">{fact.twitter_username != null ? fact.twitter_username: "Not Available"}</p>
    <p className="company">{fact.company != null ? fact.company: "Not Available"}</p>
    </div>
    </>
  )
}

export default App;