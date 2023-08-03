// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')

// Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
    apiKey: "AIzaSyDLdKdDGUo040F-pOQljOhVxwvklSex1d8",
    authDomain: "akashic-web.firebaseapp.com",
    projectId: "akashic-web",
    storageBucket: "akashic-web.appspot.com",
    messagingSenderId: "700050173065",
    appId: "1:700050173065:web:3d0706e5f5ebaeaeb4aa58",
  };

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload)

    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
