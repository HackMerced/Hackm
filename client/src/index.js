import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';   //Router Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 
library.add(fab, faFacebookSquare, faCoffee)

ReactDOM.render((
  <BrowserRouter>   {/* Added Route to main website */}
    <App />
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();