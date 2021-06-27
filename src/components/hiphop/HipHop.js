import React, {useState} from 'react';
import YouTube from 'react-youtube';
const getYouTubeId = require("get-youtube-id");


export default function HipHop() {
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
          <h1>Hip Hop and R&B</h1>
            <button onClick={handleClick} className="music-button" value='https://youtu.be/jgjHUUiq5EM'>Deep House Music</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/zVqJv_dKUEs'>Lo-Fi Hip Hop Music</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/rc9cjjEun_k'>Lo-Fi Hip Hop Beats</button>
           <button onClick={handleClick} className="music-button" value='https://youtu.be/CHevOEGP2FQ'>Jazz and R&B Music</button>
           <div className="youtube">
           <YouTube videoId={id} opts={opts}  />
           </div>
        </div>
    )
}