import classes from './Login.module.css';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    
    const userInformation = {
      userEmail: emailInputRef.current.value,
      userPassword: passwordInputRef.current.value
    };
    
    props.onInformation(userInformation);
    
    if(userInformation){
      history.push('/');
    };
  };

  return(
    <form onSubmit={submitHandler}>
      <input id='email' type='email' placeholder='E - MAIL' className={classes.info} ref={emailInputRef} />
      <input id='password' type='password' placeholder='password' className={classes.info} ref={passwordInputRef} />
      <input type='submit' value='로그인' className={classes.submit} />
      <button type='button' onClick={props.onModeChange}>회원이 아니라면?</button>
    </form>
  )
};

export default Login;