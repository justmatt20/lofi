import React, {useState} from 'react';
import YouTube from 'react-youtube';
const getYouTubeId = require("get-youtube-id");


export default function Rock() {
    const [id, setId] = useState("");

    function handleClick (e) {
        setId(getYouTubeId(e.target.value))
    }
    const opts = {
        height: '390',
        width: '640',
        origin: 'https://localhost:3000',
        playerVars: {
          autoplay: 1,
        },
      };
    return (
        <div>
          <h1>Rock</h1>
            <button onClick={handleClick} className="music-button" value='https://youtu.be/VhkxTQkuHGk'>Hard Rock Instrumental</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/Lmp2zJ7UNPM'>Heavy Metal Focus Music</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/ors0wpcVDcc'>Psychedelic Rock Music</button>
           <div className="youtube">
           <YouTube videoId={id} opts={opts}  />
           </div>
        </div>
    )
}
