import React, { useState } from 'react';
import Video from './components/Video';
import Menu from './components/Menu';



const VIDEOS = {
  fast: '/videos/fast.mp4',
  slow: '/videos/slow.mp4',
  cute: '/videos/cute.mp4',
  eek: '/videos/eek.mp4'
};


function App() {
  // Declare the `src` state variable, initialized with `VIDEOS.fast`
	const [src, setSrc] = useState(VIDEOS.fast);

 // Handler function that gets called when a new video is selected
const onSelectVideoHandler = (newVideo) => {

  // Update the `src` state with the selected video's path
   setSrc(VIDEOS[newVideo]);

}

return (
      <div>
        <h1>Video Player</h1>
        {/* Menu component with the onSelectVideoHandler passed as a prop */}
        <Menu onSelectVideo={onSelectVideoHandler} />

         {/* Video component that plays the video based on the current `src` */}
        <Video src={src}/>
      </div>
    );
};



export default App;

