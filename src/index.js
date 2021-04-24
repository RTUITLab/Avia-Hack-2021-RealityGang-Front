import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import '../src/Common/commonStyles.scss'
import 'react-toastify/dist/ReactToastify.css';
import './fonts/HelveticaNeueCyr-Bold.ttf'
import './fonts/HelveticaNeueCyr-Medium.ttf'
import './fonts/HelveticaNeueCyr-Roman.ttf'

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
document.getElementById('root')
);
