/*  importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
firebase.initializeApp({
    messagingSenderId: "1009914269750"
});
const messaging = firebase.messaging()  */
 importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js');

// Initialize Firebase
var config = {
apiKey: "xxx Your api key xxx",
authDomain: "juljulsausau.firebaseapp.com",
databaseURL: "https://juljulsausau.firebaseio.com",
projectId: "juljulsausau",
storageBucket: "juljulsausau.appspot.com",
messagingSenderId: "1009914269750"
};

firebase.initializeApp(config);

var messaging = firebase.messaging();



// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
console.log('[firebase-messaging-sw.js] Received background message ', payload);
// Customize notification here
const notificationTitle = 'Tictoks';
const notificationOptions = {
body: 'You have Notification from Tictoks'
};
return self.registration.showNotification(notificationTitle,
notificationOptions);
});
// [END background_handler] 