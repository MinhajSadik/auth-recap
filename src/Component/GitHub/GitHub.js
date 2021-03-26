import React, { useState } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseConfig from '../../firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const GitHub = () => {

    const [user, setUser] = useState({})

    const gitHubProvider = new firebase.auth.GithubAuthProvider();

    const handleGihubSignIn = () => {

        firebase.auth().signInWithPopup(gitHubProvider)
            
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(user, token, credential);
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
            <h1>GitHub Sign in</h1>
            <h1>Email: {user.email}</h1>
            <img src={user.photoURL} alt=""/>
            <button onClick={handleGihubSignIn}>Sign In With GitHub</button>
        </div>
    );
};

export default GitHub;