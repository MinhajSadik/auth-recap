import React, { useState } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

const Facebook = () => {

    const [user, setUser] = useState({})
    var FbProvider = new firebase.auth.FacebookAuthProvider();

    const handleFacebookLogin = () => {
        firebase.auth().signInWithPopup(FbProvider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
                setUser(user)
                console.log(user, accessToken);
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
            <h1>This is Facebook Login</h1>
            <h3>Email:{user.email}</h3>
            <img src={user.photoURL} alt=""/>
            <button onClick={handleFacebookLogin}>Sign in With Facebook</button>
        </div>
    );
};

export default Facebook;