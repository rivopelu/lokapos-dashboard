// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAYrNyJzFFJ0D3-5j-aBQJPO0HNVR3PIxE",
  authDomain: "lokapos-14f1f.firebaseapp.com",
  projectId: "lokapos-14f1f",
  storageBucket: "lokapos-14f1f.firebasestorage.app",
  messagingSenderId: "120535777956",
  appId: "120535777956:web:2e8c231ea0e3b432969c31"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
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