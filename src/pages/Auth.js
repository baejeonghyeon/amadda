import classes from './Auth.module.css';
import React, { useState } from 'react';

import Login from '../components/enroll/Login';


const Auth = (props) => {
  // Login 컴포넌트에서 Login 시도했을 때 App.js로 전송
  const userLoginInformation = (userInformation) => {
    const userData = {
      ...userInformation,
      mode: 'LOGIN',
    };

    props.onAuth(userData);
  };

  return (
    <div className={classes.authContainer}>
      <h3 style={{textAlign: 'center', marginBottom: '30px'}}>로그인</h3>
      <Login onInformation={userLoginInformation} />
    </div>
   
  )
};

export default Auth;