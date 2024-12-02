# *Video Player*

## 🎯 *Project Goal*  
*Video Player is a project designed to build a responsive video player using `React components`. The application allows users to select a video file from a menu and play it, demonstrating how to `manage state` and `pass data` between components in React.*

### 🔑 *Key Objectives*  
*- Use the `useState` `Hook` to manage the source (src) of the video.*  
*- Pass the `src` down from the parent component to a child component (`Video`).*  
*- Pass the `ability` to change the `src` to a different component (`Menu`).*  
*- Implement `event handling` to update the video source when a new video is selected.*

---

## 🔍 *Features*  
*- **`Responsive Video Player` :** A functional video player that displays a chosen video.*  
*- **`Video Selection Menu` :** A menu allowing users to select a video to play.*  
*- **`Dynamic Video Source` :** Update the video source dynamically when a selection is made.*  
*- **`Event Handling` :** Properly handle events to pass the selected video to the player.*  

---

## 🛠️ *Technologies Used*  
*- **`HTML` :** Structure of the application.*  
*- **`CSS` :** Styling and layout.*  
*- **`JavaScript` :** Core logic.*  
*- **`React` :** Library for building dynamic UIs.*  
*- **`JSX` :** Syntax combining HTML and JavaScript.*

---

## 🧠 *Project Structure and Logic*  

### 📝 *Components*  
*- **App :** Main component that manages `state` and passes `data` and `functions` to child components.*  
*- **Video :** Displays the selected video based on the `src` `prop`.*  
*- **Menu :** Provides a selection menu for the user to choose a new video.*

### 📤 *Data Handling*  
*- **`useState` :** Stores and updates the video `src` based on user selection.*  
*- **`setSrc` :** Updates the video source to play a new video.*  
*- **`onSelectVideoHandler` :** Function to change the video source by setting the `src` sta`te.*

### 🖥️ *Dynamic Behavior*  
*- **`onSelectVideo()` :** Passes the ability to update the video source to the Menu component.*  
*- **`clickHandler()` :** Handles the event for selecting a new video and calls `onSelectVideo` with the selected video name.*

---

## 🤝 *How to Use the Project*  

### 📂 *Fork or Download the Project*  
1. *Fork the repository on GitHub.*  
2. *Clone the repository:*  
    ```bash
    git clone https://github.com/your-username/video-player.git
    ```  
3. *Download as ZIP via the Code button and extract the files.*

---

## 🛡️ *Running the Project Locally*  

1. *Install dependencies:*  
    ```bash
    npm install
    ```  
2. *Start the development server:*  
    ```bash
    npm start
    ```  
3. *Open the app in your browser at [http://localhost:3000](http://localhost:3000).*

---

### ✨ *Enjoy your responsive video player and explore how `React components` work together! Customize it to add more features like volume control or video pause/play functionality.*
