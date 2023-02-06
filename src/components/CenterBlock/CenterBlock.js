import React, { useState, useEffect } from "react";
import Skeleton from "../Skeleton/Skeleton"
import { FilterTracks } from "./FilterTracks";
import { CenterBlockDiv,CenterTitle,CenterFilter,CenterFilterTitle,CenterPlaylistTitle,CenterPlaylist,CenterPlaylistCol1,CenterPlaylistCol2,CenterPlaylistCol3,CenterPlaylistCol4,CenterblockContent } from "./CenterBlock.jsx";
import Track from "../Track/Track";
import "./CenterBlock.css";
import { useThemeContext } from "../ThemeStore/Themestore";

// массив фильтров по артистам
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
// массив фильтров по жанрам
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
// массив фильтров по году
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
// массив треков
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
  const { theme } = useThemeContext()

  // состояние для эмуляции режима загрузки данных
  const [loading, setLoading] = useState(true);
  // состояние со списком треков
  const [tracks, setTracks] = useState(defaultTracks);

  // создаем состояния для хранения ЗНАЧЕНИЙ по каждому типу фильтров
  // изначально фильтр пустой
  const [artistFilter, setArtistFilter] = useState([]);
  const [yearFilter, setYearFilter] = useState([]);
  const [genreFilter, setGenreFilter] = useState([]);


  const handleArtistFilterSelect = (artist) => {
    // обновили состояние выбранного фильтра
    // если выбрали тот же фильтр, что и был установлен, то просто отключаем фильтрацию
    setArtistFilter((prevState) => {
      if (prevState.includes(artist)) {
        return prevState.filter(item => item !== artist);
      } else return [...prevState, artist]
    });
  };

  const handleGenreFilterSelect = (genre) => {
    // обновили состояние выбранного фильтра
    // если выбрали тот же фильтр, что и был установлен, то просто отключаем фильтрацию
    setGenreFilter((prevState) => {
      if (prevState.includes(genre)) {
        return prevState.filter(item => item !== genre);
      } else return [...prevState, genre]
    });
  };

  const handleYearFilterSelect = (year) => {
    // обновили состояние выбранного фильтра
    // если выбрали тот же фильтр, что и был установлен, то просто отключаем фильтрацию
    setYearFilter((prevState) => {
      if (prevState.includes(year)) {
        return prevState.filter(item => item !== year);
      } else return [...prevState, year]
    });
  };

  // фильтрация треков
  useEffect(() => {
    const filteredArtist = artistFilter.length ? defaultTracks.filter(track => artistFilter.includes(track.label)) : defaultTracks;
    const filteredYears = yearFilter.length ? filteredArtist.filter(track => yearFilter.includes(track.year)) : filteredArtist;
    const filteredGenres = genreFilter.length ? filteredYears.filter(track => genreFilter.includes(track.genres)) : filteredYears;
    setTracks(filteredGenres)
  }, [artistFilter, genreFilter, yearFilter])

  // через 5 секунд, переключаем состояние загрузки
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  return (
   <CenterBlockDiv>
      <CenterTitle  >Треки</CenterTitle>
      <CenterFilter>
        <CenterFilterTitle >Искать по:</CenterFilterTitle>
        <FilterTracks  label="исполнителю" options={artists} filter={artistFilter} onFilterItemClick={handleArtistFilterSelect} $IsTheme={theme}/>
        <FilterTracks  label="году выпуска" options={years} filter={yearFilter} onFilterItemClick={handleYearFilterSelect} $IsTheme={theme}/>
        <FilterTracks  label="жанру" options={genres} filter={genreFilter} onFilterItemClick={handleGenreFilterSelect} $IsTheme={theme}/>
      </CenterFilter>
      <CenterblockContent>
        <CenterPlaylistTitle >
          <CenterPlaylistCol1  >Трек</CenterPlaylistCol1>
          <CenterPlaylistCol2 >ИСПОЛНИТЕЛЬ</CenterPlaylistCol2>
          <CenterPlaylistCol3 >АЛЬБОМ</CenterPlaylistCol3>
          <CenterPlaylistCol4 >◴</CenterPlaylistCol4>
        </CenterPlaylistTitle>

        <CenterPlaylist $IsTheme={theme}>
          {
            loading ?
              // если "загрузка" еще идет, то показываем Скелетон
              defaultTracks.map((_, index) => <Skeleton key={index} />) :

              // иначе показываем список треков
              tracks
                // .filter((trackItem) => {

                //   return trackItem.label.includes(artistFilter) &&
                //     trackItem.year.includes(yearFilter) &&
                //     trackItem.genres.includes(genreFilter)
                // })
                .map((trackItem, trackIndex) => (
                  <Track 
                  $IsTheme={theme}
                    key={trackIndex}
                    name={trackItem.name}
                    label={trackItem.label}
                    genre={trackItem.genre}
                    album={trackItem.album}
                    year={trackItem.year}
                  />
                ))
          }
        </CenterPlaylist>
      </CenterblockContent>
    </CenterBlockDiv>
  );
}

export default CenterBlock;
