// require('./style/globalStyle.css');

import css from './style/globalStyle.css';

var messages = require('./messages');

import Button from './button';

import Kitten from './image';

import Mini from './mini';

import { multiply, add, subtract } from './calculator';

// var newMessage = () => (`
// 	<p>${messages.hi} ${messages.message}</p>
// 	${Kitten}
// 	${Mini}
// `);

var newMessage = () => (`
	<div class="${style.box}">
		DEV: ${DEVELOPMENT.toString()}<br>
		PROD: ${PRODUCTION.toString()}<br>
	</div>
`);

// var newMessage = () => Button.button;

var app = document.getElementById('app');
app.innerHTML = newMessage();
Button.attachEl();


if (module.hot) {
    module.hot.accept();
}

