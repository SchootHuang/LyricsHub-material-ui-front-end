import * as firebase from "firebase";

const db = firebase.initializeApp({
        apiKey: "AIzaSyD4oqMrPuchVwNNOxWpZVrD_i5IUY4qBsc",
        authDomain: "lyricshub-707e8.firebaseapp.com",
        databaseURL: "https://lyricshub-707e8.firebaseio.com",
        projectId: "lyricshub-707e8",
        storageBucket: "lyricshub-707e8.appspot.com",
        messagingSenderId: "987024682521",
        appId: "1:987024682521:web:407377286272fffd584488",
        measurementId: "G-QN79GW9M3P"
    });

export default db;