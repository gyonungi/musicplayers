import React, { useEffect, useState, useRef } from 'react';
import Logo from "../../components/Logo/Logo";
import { Link, Navigate } from 'react-router-dom';
import { useLoginMutation, useTokenMutation } from '../../backend/user';
import {  useSelector,useDispatch } from 'react-redux';
import {isLoggedInSelector} from '../../store/selectors/auth'
import { LogDiv,LogBox,LogForm,Loginput,LogButton,Regbutton } from './LogIn.styled';
import { tokenReceived } from '../../store/reducers/auth';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const loginInput = useRef(null);
  const passwordInput = useRef(null);
  const dispatch = useDispatch();
  const loggedIn = useSelector(isLoggedInSelector);
  const [userSignIn] = useLoginMutation();
  const [userToken, result] = useTokenMutation();

  useEffect(() => {
    dispatch(tokenReceived(result.data));
  }, [result.data]);

  useEffect(() => {
    if (result.error) {
      console.log(result.error.data.detail);
    }
  }, [result]);

  if (loggedIn) {
    return <Navigate to='/main'/>
  }


  const inputLogin = () => {
    setEmail(loginInput.current.value);
  };

  const inputPassword = () => {
    setPassword(passwordInput.current.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      userSignIn({ email, password });
      userToken({ email, password });
    }
    if (!email || !password) {
      console.log('пароль или логин не заполнен ');
    }
    setEmail('');
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
