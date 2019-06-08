// This file contains all js logic required for authentication: logging in, logging out, and creating an account
const auth = {
    firebaseConfig: {
        apiKey: "AIzaSyC14VXVDJBw9bue5aiR8mEP-SRPqHV7fhA",
        authDomain: "dm-screen-screen.firebaseapp.com",
        databaseURL: "https://dm-screen-screen.firebaseio.com",
        projectId: "dm-screen-screen",
        storageBucket: "dm-screen-screen.appspot.com",
        messagingSenderId: "315340998539",
        appId: "1:315340998539:web:fff281407148760f"
    },

    // Initialize Firebase
    initialize: () => {
        firebase.initializeApp(firebaseConfig);
    },

    //when the user submits their new account info, this will be triggered, and automatically sign them in on success.
    newUser: () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
            const errorCode = err.code;
            const errorMessage = err.message;
            // Handle Errors here
        });
    },

    //when the user submits their existing account info, this will be triggered, and automatically sign them in on success.
    login: () => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
            const errorCode = err.code;
            const errorMessage = err.message;
            // Handle Errors here
        });
    },

    logout: () => {
        firebase.auth().signOut().then(() => {
        }).catch(err => {
            const errorCode = err.code;
            const errorMessage = err.message;
            // Handle Errors here
        });
    },

    loggedIn: false,
    userID: "",
    watchState: () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) { loggedIn = true; }
            else { loggedIn = false }
        });
    }
}

module.exports = auth;