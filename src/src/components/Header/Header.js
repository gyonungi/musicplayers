import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput"
import React from 'react'
import "./Header.css";
import SearchLogo from "../searchlogo/searchlogo";

const Header = ()  => {  
  return (
    <div className="header">
      <Logo />
      <SearchLogo/>
      <SearchInput />
    </div>
  );
};

export default Header;