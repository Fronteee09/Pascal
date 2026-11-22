importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBiTdOYbEMcxcFECQcl6aJWTZaei4lmQ3E",
    authDomain: "pascal-b0d51.firebaseapp.com",
    projectId: "pascal-b0d51",
    storageBucket: "pascal-b0d51.firebasestorage.app",
    messagingSenderId: "216010606072",
    appId: "1:216010606072:web:faeecf8f2f806ce9c3820d"
});

const messaging = firebase.messaging();
