import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Navigation from './components/navigation/Navigation';
import Events from './pages/Events';

import logoImage from './assets/logo_amadda.png';

import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MyPage from './pages/MyPage';

import BasicInfo from './components/myPage/BasicInfo';
import InfoChange from './components/myPage/InfoChange';
import NewMember from './pages/NewMember';


function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  
  useEffect(() => {
    if(localStorage.length > 0){
      setIsAuthed(true);
    }

    // 이 부분 DB로 변경하기...
  }, []);

  const userAuthed = (userInformation) => {
    const userData = {
      ...userInformation
    };

    console.log(userData);

    // Authentication

    // 1. userData.mode === 'LOGIN'
    if(userData.mode === 'LOGIN'){
      localStorage.setItem(userData.userEmail, userData.userPassword);
      setIsAuthed(true);
      setUserDetail(userData);
      // 현재는 userData로 userDetail을 업데이트했지만, DB에서 닉네임, 주소 등까지 가져오기...
    };

    // 2. userData.mode === 'SIGNUP'
    if(userData.mode === 'SIGNUP'){
      // DB로 전송
    }
  };

  const unauthedHandler = () => {
    setIsAuthed(false);
    localStorage.clear();
  };

  return(
    <div className='content-container'>
      {!isAuthed &&
      <React.Fragment>
        <Switch>
          <Route path='/' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Route path='/' exact>
                <Home authState={isAuthed} />
              </Route>
            </Navigation>
          </Route>

          <Route path='/auth'>
            <div className='logo-amadda'>
              <img src={logoImage} className='logoImage' />
              <Auth onAuth={userAuthed} />
            </div>
          </Route>

          <Route path='/new-member'>
            <div className='logo-amadda'>
              <img src={logoImage} className='logoImage' />
              <NewMember onAuth={userAuthed} />
            </div>
          </Route>

          <Route path='/events' exact>
            <Navigation isAuthed={unauthedHandler} authState={isAuthed}>
              <Events />
            </Navigation>
          </Route>
        </Switch>

      </React.Fragment>
      }

      {isAuthed &&
      <Navigation logout={unauthedHandler} authState={isAuthed} userDetail={userDetail}>
        <Switch>

          <Route path='/' exact>
            <Home authState={isAuthed} />
          </Route>

          <Route path='/events' exact>
            <Events />
          </Route>

          <Route path='/my-page'>
            <MyPage />
          </Route>

        </Switch>
      </Navigation>
      }
    </div>
  )
}

export default App;
