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
        <div>
            <h1>Nature</h1>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/lE6RYpe9IT0'>music Sounds with Music</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/x7SQaDTSrVg'>Rain (no music)</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/DXzk5i4Ofe8'>Waves with Music</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/bn9F19Hi1Lk'>Waves (no music)</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/SN3xlcjbvUo'>Nature Sounds with Music</button>
           <div className="youtube">
           <YouTube videoId={id} opts={opts}  />
           </div>
        </div>
    )
}