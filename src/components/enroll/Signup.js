import classes from './Signup.module.css';
import { useRef } from 'react';

const Signup = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    
    const userInformation = {
      userEmail: emailInputRef.current.value,
      userPassword: passwordInputRef.current.value
    };
    
    props.onInformation(userInformation);
  };

  return(
    <form onSubmit={submitHandler}>
      <input id='email' type='email' placeholder='E - MAIL' className={classes.info} ref={emailInputRef} />
      <input id='text' type='text' placeholder='Nickname' className={classes.info} />
      <input id='password' type='password' placeholder='password' className={classes.info} ref={passwordInputRef} />
      <input type='submit' value='회원 가입하기' className={classes.submit} />
      <button type='button' onClick={props.onModeChange}>기존 회원이라면?</button>
    </form>
  )
};

export default Signup;