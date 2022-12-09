import React, { useState } from "react";

import Track from "../Track/Track";
import "./CenterBlock.css";

function CenterBlock() {
  // состояние для отображения видимости меню для фильтра по исполнителю
  const [visibleArtistMenu, setVisibleArtistMenu] = useState(false);
  // состояние для отображения видимости меню для фильтра по жанру
  const [visibleGenreMenu, setVisibleGenreMenu] = useState(false);

  // обработка клика по кнопке фильтра "Исполнитель"
  const handleArtistFilterClick = () => {
    const artists = [
      {id:2,
      name:"Michael Jackson"},
      {id:1,
        name:"Frank Sinatra"},
      {id:3,
        name:"Calvin Harris"},
      {id:4,
        name:"Bones"},
      {id:5,
        name:"Central Cee"},
      {id:6,
        name:"Cold Carti"}
    ];
    let listItem = artists.map(artist => <li key={ artist.id }>{ artist.name }</li>)
    setVisibleArtistMenu(true);
  }

  // обработка клика по кнопке фильтра "Жанр"
  const handleGenreFilterClick = () => {
    setVisibleGenreMenu(true);
  }

 

  return (
    <div className="centerBlock">
      <h2 className="centeBlock__title">Треки</h2>
      <div className="centerBlock__filter">
        <h3 className="centerBlock__filter_title">Искать по:</h3>
        <div className="dropdown">
          <button className="centerBlock__filter_btn" onClick={handleArtistFilterClick}>
            исполнителю
          </button>
          {
            // условный рендеринг меню, если visibleArtistMenu === true, то будет показан блок .list
            // иначе это меню не будет отрисованно
            visibleArtistMenu &&
            <ul className="list">
              {/* { listItem } */}            
            <li className="list-item-musician">Michael Jackson</li>
            <li className="list-item-musician">Frank Sinatra</li>
            <li className="list-item-musician">Calvin Harris</li>
            <li className="list-item-musician">Bones</li>
            <li className="list-item-musician">Central Cee</li>
            <li className="list-item-musician">Cold Carti</li>
            <li className="list-item-musician">Cold Carti</li>
            <li className="list-item-musician">Cold Carti</li>
            <li className="list-item-musician">Cold Carti</li>
            </ul>
            
          }

        </div>
        <button className="centerBlock__filter_btn">году выпуска</button>
        <div className="dropdown">
          <button className="centerBlock__filter_btn" onClick={handleGenreFilterClick}>жанру</button>
          {
            // условный рендеринг меню, если visibleGenreMenu === true, то будет показан блок .list
            // иначе это меню не будет отрисованно
            visibleGenreMenu &&
            <ul className="list">
              <li className="list-item-genre">Elektro</li>
              <li className="list-item-genre">Jazz</li>
              <li className="list-item-genre">Rap</li>
              <li className="list-item-genre">Techno</li>
              <li className="list-item-genre">Hip-hop</li>
              <li className="list-item-genre">R&B</li>
            </ul>
          }

        </div>
      </div>
      <div className="centerblock__content">
        <div className="centerblock__playlist-title">
          <div className="centerblock__playlist-col col1">Трек</div>
          <div className="centerblock__playlist-col col2">ИСПОЛНИТЕЛЬ</div>
          <div className="centerblock__playlist-col col3">АЛЬБОМ</div>
          <div className="centerblock__playlist-col col4">◴</div>
        </div>

        <div className="centerblock__playlist">
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <div className="navigationMenu">
            <button className="navigationMenu__link navigationMenu__link_daily-playList"></button>
            <button className="navigationMenu__link navigationMenu__link_top-100"></button>
            <button className="navigationMenu__link navigationMenu__link_indy"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterBlock;
