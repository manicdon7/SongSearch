import React,{useEffect,useState} from 'react';
import './App.css';
import Musiccard from "./MusicCard";
import SearchIcon from "./search.svg";


const API_URL = "Your_ApiKey_Here";

const App = () => {
  const [searchterm, setsearchterm] = useState("");
  const [songs,setsongs] = useState([]);
  
  useEffect(()=>{
    searchsongs("seach your fav here...");
  },[]);

  const searchsongs = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setsongs(data.search);
  };
  return(
    <div className='app'>
      <h1>SongsIland</h1>
      <div className='search'>
        <input value={searchterm} onChange={(e)=> setsearchterm(e.target.value)} placeholder='Seach songs here'/>
        <img src={SearchIcon} alt="search" onClick={() => searchsongs(searchterm)} />
      </div>

      {songs.length > 0 ? (
        <div className="container">
          {songs.map((song) => (
            <Musiccard song={song} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No songs found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
