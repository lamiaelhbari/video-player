// The Menu component allows the user to select a video source by clicking on a radio button
function Menu(props) {
  
    // clickHandler is triggered when a radio button is clicked
    const clickHandler = (event) => {

      const name = event.target.value;// Get the value of the selected radio button
      props.onSelectVideo(name);// Pass the selected video name to the parent component
    };
  
  
      return (
            /* Handles click events to change video source */
            <form onClick={clickHandler}> 
            
                <input type="radio" name="src" value="fast"/> fast
                <input type="radio" name="src" value="slow" /> slow
                <input type="radio" name="src" value="cute" /> cute
                <input type="radio" name="src" value="eek" /> eek
            </form>
          );
  };
  
  
  export default Menu;