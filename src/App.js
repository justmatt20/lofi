import React, {useState} from 'react';
import Lofi from './components/Lofi/Lofi';
import Nature from './components/nature/Nature';
import Ambient from './components/Ambient/Ambient';
import Rock from './components/rock/Rock';
import HipHop from './components/hiphop/HipHop';
import Header from './components/header/Header'
import Footer from './components/Footer';
import './App.css';




function App() {
  const [active, setActive] = useState('lofimusic')
  return (
    <div className="App">
      <Header />
      <div className="home">
      <p>Choose your genre, enjoy the music.</p>
      </div>
      <div className="buttons">
            <button className="genre" onClick={() => setActive('lofimusic')}>Lo-fi</button>
            <button className="genre" onClick={() => setActive('naturemusic')}>Nature</button>
            <button className="genre" onClick={() => setActive('ambientmusic')}>Ambient</button>
            <button className="genre" onClick={() => setActive('rockmusic')}>Rock</button>
            <button className="genre" onClick={() => setActive('hiphopmusic')}>Hip Hop / R&B</button>
      </div>
      <div className="video-player">
        {active === 'lofimusic' && <Lofi />}
        {active === 'naturemusic' && <Nature />}
        {active === 'ambientmusic' && <Ambient />}
        {active === 'rockmusic' && <Rock />}
        {active === 'hiphopmusic' && <HipHop />}
      </div>
     <Footer />
    </div>
  );
}

export default App;
