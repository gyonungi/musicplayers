import React, { useState } from "react";
import Skeleton from "../Skeleton/Skeleton"

import Track from "../Track/Track";
import "./CenterBlock.css";
// массив артистов можно вынести за функцию
const artists = [
  {
    id: 2,
    name: "Michael Jackson",
  },
  {
    id: 1,
    name: "Frank Sinatra",
  },
  {
    id: 3,
    name: "Calvin Harris",
  },
  {
    id: 4,
    name: "Bones",
  },
  {
    id: 5,
    name: "Central Cee",
  },
  {
    id: 6,
    name: "Cold Carti",
  },
];

const genres = [
  {
    id: 1,
    name: "Elektro",
  },
  {
    id: 2,
    name: "Jazz",
  },
  {
    id: 3,
    name: "Rap",
  },
  {
    id: 4,
    name: "Techno",
  },
  {
    id: 5,
    name: "Hip-Hop",
  },
  {
    id: 6,
    name: "R&B",
  },
];
const years = [
  {
    id: 1,
    name: "2021",
  },
  {
    id: 2,
    name: "2020",
  },
  {
    id: 3,
    name: "2019",
  },
  {
    id: 4,
    name: "2018",
  },
  {
    id: 5,
    name: "2017",
  },
  {
    id: 6,
    name: "2016",
  },
];

const defaultTracks = [
  {
    id: 1,
    name: "AirPlane Mode",
    label: "Bones",
    genres: "Hip-Hop",
    album: "Bye",
    year: "2020",
  },
  {
    id: 2,
    name: "Loading",
    label: "Central Cee",
    genres: "Techno",
    album: "Under",
    year: "2021",
  },
  {
    id: 3,
    name: "Save",
    label: "Cold Carti",
    genres: "Elektro",
    album: "Welcome",
    year: "2019",
  },
  {
    id: 4,
    name: "My Way",
    label: "Calvin Harris",
    genres: "Hip-Hop",
    album: "Hello",
    year: "2018",
  },
  {
    id: 5,
    name: "AirPlane Mode",
    label: "Bones",
    genres: "Frank Sinatra",
    album: "Beautiful",
    year: "2017",
  },
  {
    id: 6,
    name: "Bad",
    label: "Michael Jackson",
    genres: "R&B",
    album: "Welcome",
    year: "2016",
  },
];

function CenterBlock() {
  // затем кладем массив треков в локальное состояние
  const [tracks, setTracks] = useState(defaultTracks);
  // состояние для отображения видимости меню для фильтра по исполнителю
  const [visibleArtistMenu, setVisibleArtistMenu] = useState(false);
  // состояние для отображения видимости меню для фильтра по жанру
  const [visibleGenreMenu, setVisibleGenreMenu] = useState(false);
  const [visibleYearMenu, setVisibleYearMenu] = useState(false);

  // создаем состояния для хранения ЗНАЧЕНИЙ по каждому типу фильтров
  // изначально фильтр пустой
  const [artistFilter, setArtistFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  // обработка клика по кнопке фильтра "Исполнитель"
  const handleArtistFilterClick = () => {
    let listItem = artists.map((artist) => (
      <li key={artist.id}>{artist.name}</li>
    ));

    setVisibleArtistMenu(!visibleArtistMenu);
  };

  // обработка клика по кнопке фильтра "Жанр"
  const handleGenreFilterClick = () => {
    let listItemGenre = genres.map((genre) => (
      <li key={genre.id}>{genre.name}</li>
    ));
    // используй инвертирование булевого значения с помощью оператора !
    // это поможет включать и выключать меню при каждом клике
    setVisibleGenreMenu(!visibleGenreMenu);
  };
  // обработка клика по кнопке фильтра "Год"
  const handleYearFilterClick = () => {
    let listItemYear = years.map((year) => <li key={year.id}>{year.name}</li>);
    // используй инвертирование булевого значения с помощью оператора !
    // это поможет включать и выключать меню при каждом клике
    setVisibleYearMenu(!visibleYearMenu);
  };

  const handleArtistFilterSelect = (artist) => {
    setArtistFilter(artist);
  };
  const handleGenreFilterSelect = (genre) => {
    setGenreFilter(genre);
  };
  const handleYearFilterSelect = (year) => {
    setYearFilter(year);
  };

  return (
    <div className="centerBlock">
      <h2 className="centeBlock__title">Треки</h2>
      <div className="centerBlock__filter">
        <h3 className="centerBlock__filter_title">Искать по:</h3>
        <div className="dropdown">
          <button
            className="centerBlock__filter_btn"
            onClick={handleArtistFilterClick}
          >
            исполнителю
          </button>
          {
            // условный рендеринг меню, если visibleArtistMenu === true, то будет показан блок .list
            // иначе это меню не будет отрисованно
            visibleArtistMenu && (
              <ul className="list">
                {/* тут мы рендерим список с помощью массива и метода .map */}
                {
                  // добавляем обработчик клика для элементов выпадающего списка
                  // при клике на него мы должны в state artistFilter сохранить выбранного артиста
                  artists.map((item) => (
                    <li
                      className="list-item-musician"
                      key={item.id}
                      onClick={() => handleArtistFilterSelect(item.name)}
                    >
                      {item.name}
                    </li>
                  ))
                }
              </ul>
            )
          }
        </div>
        <div className="dropdown">
          <button
            className="centerBlock__filter_btn"
            onClick={handleYearFilterClick}
          >
            году выпуска
          </button>
          {
            // условный рендеринг меню, если visibleGenreMenu === true, то будет показан блок .list
            // иначе это меню не будет отрисованно

            visibleYearMenu && (
              <ul className="list">
                {/* тут мы рендерим список с помощью массива и метода .map */}
                {years.map((item) => (
                  <li
                    className="list-item-year"
                    key={item.id}
                    onClick={() => handleYearFilterSelect(item.name)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )
          }
        </div>
        <div className="dropdown">
          <button
            className="centerBlock__filter_btn"
            onClick={handleGenreFilterClick}
          >
            жанру
          </button>
          {
            // условный рендеринг меню, если visibleGenreMenu === true, то будет показан блок .list
            // иначе это меню не будет отрисованно

            visibleGenreMenu && (
              <ul className="list">
                {/* тут мы рендерим список с помощью массива и метода .map */}
                {genres.map((item) => (
                  <li
                    className="list-item-genre"
                    key={item.id}
                    onClick={() => handleGenreFilterSelect(item.name)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )
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
          {/* тут используем метод .map для отрисовки списка треков
            только нужно будет передавать ему пропсы из массива tracks
            tracks.map((track) => {
              return <Track .... />
            })
          */}
          {defaultTracks.filter((trackItem) =>{
            return trackItem.label.includes(artistFilter) && 
            trackItem.year.includes(yearFilter) &&
            trackItem.genres.includes(genreFilter)
          })
          .map((trackItem, trackIndex) => (
            <Skeleton Track
              key={trackIndex}
              name={trackItem.name}
              label={trackItem.label}
              genre={trackItem.genre}
              album={trackItem.album}
              year={trackItem.year}
            />     
          ))}       
        </div>
      </div>
    </div>
  );
}

export default CenterBlock;
