import { useNavigate } from 'react-router-dom';
import React from 'react'
//import { Route, Switch} from 'react-router-dom'

import { RegBackground,RegPass,RegLog,RegButton,RegImg,DivPassLog,RegContent,RegPassHr } from './Registr.jsx';

const RegistrLogo = "../../images/logoDark.png";

export const Registr = () =>{
  const navigate = useNavigate();



  const handleRegLogButton = () =>{
    navigate("/login");
}


  return (
    <RegBackground>
      <RegContent>
        <RegImg src={RegistrLogo}/>
        <DivPassLog>
      <RegLog placeholder='Логин'/>
      <RegPassHr/>
      <RegPass placeholder='Пароль'/>
      <RegPassHr/>
      <RegPass placeholder='Повторите Пароль'/>
      <RegPassHr/>
      </DivPassLog>
      <RegButton onСlick={handleRegLogButton}>Зарегистрироваться</RegButton>
      </RegContent>
    </RegBackground>
   
  );
};
export default Registr;