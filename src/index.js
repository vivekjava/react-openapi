import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import BitCoin from './bitcoin/BitCoin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<BitCoin />, document.getElementById('bitcoin'));
registerServiceWorker();
