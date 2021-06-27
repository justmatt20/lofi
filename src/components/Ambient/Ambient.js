import React, {useState} from 'react';
import YouTube from 'react-youtube';
const getYouTubeId = require("get-youtube-id");


export default function Ambient() {
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
        <div className="video">
          <h1>Ambient</h1>
            <button onClick={handleClick} className="music-button" value='https://youtu.be/GCU075Bon7U'>Ambient/Relaxing Music</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/xZV3AIE0v0E'>Solitude Ambient Music</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/7zphVoKwkHA'>Ambient Focus Music</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/qt_urUz42vI'>Relaxing Ambient Music</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/QN1uygzp56s'>Ambient Jazz Music</button>
           <div className="youtube">
           <YouTube videoId={id} opts={opts}  />
           </div>
        </div>
    )
}
