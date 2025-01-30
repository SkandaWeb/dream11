// This file is required for handling push notifications in Flutter Web
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
// import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js';


// import { initializeApp } from "firebase/app";
// // import { getMessaging } from "firebase/messaging/sw";
// import { getMessaging, onMessage } from "firebase/messaging";

importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAbZW4VpjTKDOVl7SUTLzgA-KP5ng31i6I",
    authDomain: "skanda-vizit.firebaseapp.com",
    projectId: "skanda-vizit",
    storageBucket: "skanda-vizit.firebasestorage.app",
    messagingSenderId: "1047368686247",
    appId: "1:1047368686247:web:c88cd2d9e3ad7de0545982",
    measurementId: "G-MHRMMC2K4K"
});


// const messaging = getMessaging(firebaseApp);
const messaging = firebase.messaging();

// Handle background push notifications
// onBackgroundMessage(messaging, (payload) => {
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.icon,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
// onMessage(messaging, (payload) => {
//     console.log('Message received. ', payload);
//     // ...
//   });

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });
  