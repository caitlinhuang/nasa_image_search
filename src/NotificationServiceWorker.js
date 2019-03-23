importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.2/firebase-messaging.js');
import {messagingSenderId} from './Constants'

firebase.initializeApp({
    messagingSenderId: messagingSenderId // sender id 
});

const messaging = firebase.messaging();
