import React, { useState } from "react";
import { CenterBlockDiv,CenterTitle,CenterFilter,CenterFilterTitle,CenterPlaylistTitle,CenterPlaylist,CenterPlaylistCol1,CenterPlaylistCol2,CenterPlaylistCol3,CenterPlaylistCol4,CenterblockContent } from "./CenterBlock.styled";
import Track from "../Track/Track";
import { FilterTracks } from "./FilterTracks";
import "./CenterBlock.css";
import { useThemeContext } from "../ThemeStore/Themestore";
import { useGetAllTracksQuery } from "../../backend/tracks";


export const CenterBlockContent = () => {
  const { data: allTracks = [], error, isLoading } = useGetAllTracksQuery();

  const { theme } = useThemeContext()
  
  const [artistFilter, setArtistFilter] = useState([]);
  const [yearFilter, setYearFilter] = useState([]);
  const [genreFilter, setGenreFilter] = useState([]);

const handleArtistFilterSelect = (artist) => {

    // если выбрали отключаем  состояние фильтрации
    setArtistFilter((prevState) => {
      if (prevState.includes(artist)) {
        return prevState.filter(item => item !== artist);
      } else return [...prevState, artist]
    });
  };

  const handleGenreFilterSelect = (genre) => {
    
    setGenreFilter((prevState) => {
      if (prevState.includes(genre)) {
        return prevState.filter(item => item !== genre);
      } else return [...prevState, genre]
    });
  };

  const handleYearFilterSelect = (year) => {
   
    setYearFilter((prevState) => {
      if (prevState.includes(year)) {
        return prevState.filter(item => item !== year);
      } else return [...prevState, year]
    });
  };
      
    // фильтрация треков
    const filteredTracks = allTracks.filter((track) => {
      let isFilterAllowed = true
      if(artistFilter.length) {
      isFilterAllowed = artistFilter.includes(track.author)
      }
      if(yearFilter.length && isFilterAllowed){
       isFilterAllowed = genreFilter.includes(track.year)
      }
      if(genreFilter.length && isFilterAllowed){
         isFilterAllowed = genreFilter.includes(track.genre)
      }
      return isFilterAllowed
      
   })
 
    const newauthor = [];
    for (let f = 0; f < allTracks.length; f++) {
      const elem = allTracks[f];
      newauthor.push(elem.author)
    }
    
      const newyear = [];
      for (let j = 0; j < allTracks.length; j++) {
        const elem = allTracks[j];
        newyear.push(elem.release_date);
      }
      
    const newgenre = [];
    for (let i = 0; i < allTracks.length; i++) {
      const elem = allTracks[i];
      newgenre.push(elem.genre);
    }
    

  return (
   <CenterBlockDiv>
      <CenterTitle  >Треки</CenterTitle>
      <CenterFilter>
        <CenterFilterTitle >Искать по:</CenterFilterTitle>
        <FilterTracks label="исполнителю" options={newauthor}  filter={artistFilter} onFilterItemClick={handleArtistFilterSelect} />
        <FilterTracks label="году выпуска" options={newyear} filter={yearFilter} onFilterItemClick={handleYearFilterSelect} />
        <FilterTracks label="жанру" options={newgenre} filter={genreFilter} onFilterItemClick={handleGenreFilterSelect} />
      </CenterFilter>
      <CenterblockContent>
        <CenterPlaylistTitle >
          <CenterPlaylistCol1  >Трек</CenterPlaylistCol1>
          <CenterPlaylistCol2 >ИСПОЛНИТЕЛЬ</CenterPlaylistCol2>
          <CenterPlaylistCol3 >АЛЬБОМ</CenterPlaylistCol3>
          <CenterPlaylistCol4 >◴</CenterPlaylistCol4>
        </CenterPlaylistTitle>  
        {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <CenterPlaylist $IsTheme={theme}/>
      ) : allTracks ? (
        <CenterPlaylist >

    {filteredTracks.map((element, index) => (
      
                  <Track 
                  $IsTheme={theme}
                  id={element.id}
                  track={element.name}
                  artist={element.author}
                  album={element.album}
                  time={element.duration_in_seconds}
                  key={index}
                  />
                ))}
        </CenterPlaylist>
      ) : null } 
      </CenterblockContent>
    </CenterBlockDiv>
  );
}

export default CenterBlockContent;
