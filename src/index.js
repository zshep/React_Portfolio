import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  app: {
    display:"flex",
    height:"100vh",
    marginBottom:"0vh",

  }


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App style={styles.app} />
    </HashRouter>  
  </React.StrictMode>
);

