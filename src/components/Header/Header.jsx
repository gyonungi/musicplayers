import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput"
import React from 'react'

import SearchLogo from "../searchlogo/searchlogo";
import { StyledHeader } from "./Header.styled";

const Header = ()  => {  
  return (
    <StyledHeader>
      <Logo />
      <SearchLogo/>
      <SearchInput />
      </StyledHeader>
  );
};

export default Header;