import React, { useState } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseConfig from '../../firebase.config';

if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}
const Google = () => {
    const [user, setUser] = useState({})
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(user, token);
                setUser(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });

    }
    return (
        <div>
            <h1>This Is Google Login Forum</h1>
            <h3>Email: {user.email}</h3>
            <img src={user.photoURL} alt="" />
            <br/>
            <button onClick={handleGoogleSignIn}>SignIn With Google</button>
        </div>
    );
};

export default Google;