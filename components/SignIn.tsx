import React, { CSSProperties } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase';

interface SignInProps {
  signInWithGoogle: () => Promise<void>;
}

const SignIn: React.FC<SignInProps> = ({ signInWithGoogle }) => {
  const signInContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    gap: '20px', // Add a gap between child elements
  };

  const signInButtonStyle: CSSProperties = {
    backgroundColor: '#4285f4',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={signInContainerStyle}>
      <h2>中醫語音病歷輔助系統，請先註冊後使用</h2>
      <button onClick={signInWithGoogle} style={signInButtonStyle}>
        Sign In with Google
      </button>
    </div>
  );
};

export default SignIn;