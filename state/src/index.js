import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppClass from './AppClass';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppClass/>
  </React.StrictMode>,
  document.getElementById('root')
);


// Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
// Add a button that toggles the show state. When the show state is true, the person's profile will appear.
// Create a field that shows the time interval since the last component was mounted using the component lifecycle.
// Hint: use the setInterval method.

