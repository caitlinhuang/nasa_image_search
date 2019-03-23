import firebase from 'firebase/app';
import 'firebase/messaging';
import {messagingSenderId} from './Constants'

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: messagingSenderId
  });
}

export const askForPermissioToReceiveNotifications = async (callback) => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token:', token);
    
    return callback(null, token);
  } catch (error) {
    console.error(error);
    return callback(error, null);
  }
}

  

