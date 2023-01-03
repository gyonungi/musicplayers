
import React from 'react'
//import { Route, Switch} from 'react-router-dom'
import "./Reag.css"
import { RegPass,RegLog,RegLogButton,RegButton } from './Reag';

const Reag = ()  => {
  
  
  return (
    <div className='root'>
      
      <RegLog placeholder=''></RegLog>
      <RegPass placeholder='Пароль'></RegPass>
      <RegLogButton>Вход</RegLogButton>
      <RegButton>Зарегистрироваться</RegButton>
    </div>
  );
};

export default Reag;