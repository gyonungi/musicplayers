import React, { useState } from "react";

import Track from "../Track/Track";
import "./CenterBlock.css";

function CenterBlock() {
  const [dropMenu, setdropMenu] = useState({open: false});
  const handledropMenu = () =>{
    setdropMenu({open: !dropMenu.open})
  }
    return (
        <div className="centerBlock">
          <h2 className="centeBlock__title">Треки</h2>
          <div className="centerBlock__filter">
            <h3 className="centerBlock__filter_title">Искать по:</h3>
            <button className="centerBlock__filter_btn" onClick={handledropMenu}>исполнителю</button>
            <button className="centerBlock__filter_btn">году выпуска</button>
            <button className="centerBlock__filter_btn">жанру</button>
          </div>
          <div className="centerblock__content">
            <div className="centerblock__playlist-title">
                <div className="centerblock__playlist-col col1">Трек</div>
                <div className="centerblock__playlist-col col2">ИСПОЛНИТЕЛЬ</div>
                <div className="centerblock__playlist-col col3">АЛЬБОМ</div>
                <div className="centerblock__playlist-col col4">◴</div>
            </div>
            {dropMenu.open && 
            <div className="track__author">
            <a className="track__author-link" href="http://">
              Nero
            </a>
          </div>
}
            <div className="centerblock__playlist">
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <div className="navigationMenu">
            <button className="navigationMenu__link navigationMenu__link_daily-playList"></button>
            <button className="navigationMenu__link navigationMenu__link_top-100"></button>
            <button className="navigationMenu__link navigationMenu__link_indy"></button>
            </div>    
            </div>  
          </div>    
        </div>  
        
    )
}

export default CenterBlock;
