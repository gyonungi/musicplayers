
import React from 'react'
//import { Route, Switch} from 'react-router-dom'
import RegistrLogo from "../../images/logoDark.png"
import { RegBackground,RegPass,RegLog,RegLogButton,RegButton,RegImg } from './Registr.jsx';

const Registr = ()  => {
  
  
  return (
    <RegBackground>
      <RegImg src={RegistrLogo}/>
      <div>
      <RegLog placeholder='Логин'></RegLog>
      <RegPass placeholder='Пароль'></RegPass>
      </div>
      <RegLogButton>Войти</RegLogButton>
      <RegButton>Зарегистрироваться</RegButton>
    </RegBackground>
  );
};

export default Registr;