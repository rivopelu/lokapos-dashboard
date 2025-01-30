// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDxKfJaWjwU_M2_OYtWzKtufSau3Tx92PU",
  authDomain: "storage-sentrum-stagging.firebaseapp.com",
  projectId: "storage-sentrum-stagging",
  storageBucket: "storage-sentrum-stagging.appspot.com",
  messagingSenderId: "285217660405",
  appId: "1:285217660405:web:6bd69628027955034154bc"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions).then();
});