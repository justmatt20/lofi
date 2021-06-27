import React, {useState} from 'react';
import YouTube from 'react-youtube';
const getYouTubeId = require("get-youtube-id");


export default function Lofi() {
    const [id, setId] = useState("");

    function handleClick (e) {
        console.log(e.target.value)

        setId(getYouTubeId(e.target.value))
    }
    const opts = {
        height: '390',
        width: '640',
        origin: 'https://localhost:3000',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return (
        <div className="video">
          <h1>Lo-Fi</h1>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/-5KAN9_CzSA'>Coffee Shop Beats</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/reLhTpKTuPo'>Hip Hop/Chill Beats</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/5yx6BWlEVcY'>Jazz Chill Beats</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/vEX7nUP2IuA'>Hip Hop/Space Beats</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/IjMESxJdWkg'>Hip Hop/Chill Beats</button>
           <div className="youtube">
           <YouTube videoId={id} opts={opts}  />
           </div>
        </div>
    )
}
