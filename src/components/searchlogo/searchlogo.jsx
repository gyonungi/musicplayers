
import React from 'react'

import "./searchlogo.css";
import SearchSvg from '../../images/icon/search.svg';

function SearchLogo() {
  return (
    <svg class="search__svg">
    <use  xlinkHref={SearchSvg}></use>
</svg>
  );
}

export default SearchLogo;
