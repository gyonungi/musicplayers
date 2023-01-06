
import React from 'react'
//import { Route, Switch} from 'react-router-dom'
import RegistrLogo from "../../images/logoDark.png"
import { RegBackground,RegPass,RegLog,RegLogButton,RegButton,RegImg,DivPassLog,RegContent,RegPassHr } from './Login.jsx';

const Login = ()  => {
  
  
  return (
    <RegBackground>
      <RegContent>
        <RegImg src={RegistrLogo}/>
        <DivPassLog>
      <RegLog placeholder='Логин'/>
      <RegPassHr/>
      <RegPass placeholder='Пароль'/>
      <RegPassHr/>
      </DivPassLog>
      <RegLogButton>Войти</RegLogButton>
      <RegButton>Зарегистрироваться</RegButton>
      </RegContent>
    </RegBackground>
  );
};

export default Login;