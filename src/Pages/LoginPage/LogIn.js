import React, { useEffect, useState, useRef } from 'react';
import styles from './LogIn.module.scss';
import Logo from "../../components/Logo/Logo";
import { Link, Navigate } from 'react-router-dom';
import { useLoginMutation, useTokenMutation } from '../../backend/user';
import {  useSelector } from 'react-redux';
import {isLoggedInSelector} from '../../store/selectors/auth'
import { LogDiv,LogBox,LogForm,Loginput,LogButton,Regbutton } from './LogIn';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const loginInput = useRef(null);
  const passwordInput = useRef(null);

  const loggedIn = useSelector(isLoggedInSelector);
  const [userSignIn] = useLoginMutation();
  const [userToken, result] = useTokenMutation();


  useEffect(() => {
    if (result.error) {
      console.log(result.error.data.detail);
    }
  }, [result]);

  if (loggedIn) {
    return <Navigate to='/main'/>
  }


  const inputLogin = () => {
    setUsername(loginInput.current.value);
  };

  const inputPassword = () => {
    setPassword(passwordInput.current.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (username && password) {
      userSignIn({ username, password });
      userToken({ username, password });
    }
    if (!username || !password) {
      console.log('поле пароль и/или логин не заполнено ');
    }
    setUsername('');
    setPassword('');
    passwordInput.current.value = '';
    loginInput.current.value = '';
  };

  return (
    <LogDiv >
      <LogBox >
        <div >
          <Logo />
        </div>
        <LogForm onSubmit={handleSignIn} >
          <Loginput
            ref={loginInput}
            onChange={inputLogin}
            type="text"
            name="login"
            id="login"
            placeholder="Логин"
          />
          <Loginput
            ref={passwordInput}
            onChange={inputPassword}
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
          />

          <LogButton >Войти</LogButton>

          <Link to="/reg">
            <Regbutton >Зарегистрироваться</Regbutton>
          </Link>
        </LogForm>
      </LogBox>
    </LogDiv>
  );
};

export default LogIn;
