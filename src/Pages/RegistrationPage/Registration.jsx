import React, { useState, useRef,useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import { useSignupMutation } from '../../backend/user';
import { RegDiv,RegBox,RegForm , Reginput,LogButton  } from './Registration.styled';

const Registration = (props) => {
  const [userSignUp] = useSignupMutation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const loginButton = useRef(null);
  const emailButton = useRef(null);
  const passwordButton = useRef(null);
  const confirmPasswordButton = useRef(null);

  const canSave = [username, email, password, confirmPassword].every(Boolean);

  const inputLogin = () => {
    setUsername(loginButton.current.value);
  };

  const inputEmail = () => {
    setEmail(emailButton.current.value);
  };

  const inputPassword = () => {
    setPassword(passwordButton.current.value);
  };

  const inputConfirmPassword = () => {
    setConfirmPassword(confirmPasswordButton.current.value);
  };

  const registerUser = async () => {
    if (canSave) {
      try {
        await userSignUp({ username, email, password }).unwrap();
      } catch (err) {
        console.log(err.data.password[0]);
      }
    }
  };

  return (
    <RegDiv >
      <RegBox >
        <div >
          <Logo />
        </div>
        <RegForm >
          <Reginput
            ref={loginButton}
            onChange={inputLogin}
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
             <Reginput
            ref={emailButton}
            onChange={inputEmail}
            type="text"
            name="email"
            id="email"
            placeholder="email"
          />
          <Reginput
            ref={passwordButton}
            onChange={inputPassword}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <Reginput
            ref={confirmPasswordButton}
            onChange={inputConfirmPassword}
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="confirm password"
          />
          <Link to="/" >
            <LogButton onClick={registerUser} >
              Зарегистрироваться
            </LogButton>
          </Link>
        </RegForm>
      </RegBox>
    </RegDiv>
  );
};

export default Registration;
