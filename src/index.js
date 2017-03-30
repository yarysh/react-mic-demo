import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './style.css';
import Demo from './Demo';


const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Demo/>
        </AppContainer>,
        document.getElementById('demo')
    );
};
render();

if (process.env.NODE_ENV !== 'production') {
    module.hot && module.hot.accept('.', () => {render()});
}
