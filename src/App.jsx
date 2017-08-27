import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './components/Slider';
import config from './config';

import './style.scss';

function App() {
    return (
        <div className='container'>
            <h1>React Slider</h1>

            <Slider config={config} slides={config.slides} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));