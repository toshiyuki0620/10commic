import React from 'react';
import {auth} from '../services/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: "/",
  signInOptions: [
    auth.GoogleAuthProvider.PROVIDER_ID,
    // auth.FacebookAuthProvider.PROVIDER_ID,
    // auth.TwitterAuthProvider.PROVIDER_ID,
    auth.GithubAuthProvider.PROVIDER_ID,
    auth.EmailAuthProvider.PROVIDER_ID,
    // auth.PhoneAuthProvider.PROVIDER_ID
  ],
}


const SignInScreen = (props) => {
  return (
    <div>
      <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    </div>
  );
}
export default SignInScreen;
