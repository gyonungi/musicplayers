import { useNavigate } from 'react-router-dom';
import React from 'react'
//import { Route, Switch} from 'react-router-dom'
import RegistrLogo from "../../images/logoDark.png"
import { RegBackground,RegPass,RegLog,RegButton,RegImg,DivPassLog,RegContent,RegPassHr } from './Registr.jsx';


export const Registr = () =>{
  const navigate = useNavigate();



  const handleRegLogButton = () =>{
    navigate("/login");
}



export default const Login = ()  => {


  
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
      <RegButton onClick = {handleRegLogButton}>Зарегистрироваться</RegButton>
      </RegContent>
    </RegBackground>
}
  );
};
