
// // Video component that displays a video player with controls
function Video(props) {
    return (
      <div>
        <video controls 
               autostart 
               autoPlay 
               muted
               /* The video element receives the 'src' prop to specify which video to play */
               src={props.src} 
        />
      </div>
    );
};


export default Video;