import React, { useState, useEffect } from "react";
import { CenterBlockDiv,CenterTitle,CenterPlaylistTitle,CenterPlaylist,CenterPlaylistCol1,CenterPlaylistCol2,CenterPlaylistCol3,CenterPlaylistCol4,CenterblockContent } from "./CenterBlock.jsx";
import Track from "../Track/Track";
import "./CenterBlock.css";
import { useThemeContext } from "../ThemeStore/Themestore";
import { useGetAllTracksQuery } from "../../backend/tracks";

const CenterBlockContent = ({ tracks, trackId }) => {
  const { data: allTracks, error, isLoading } = useGetAllTracksQuery();

  useEffect(() => {
    if (allTracks) {
       tracks(allTracks);
    }
  }, [allTracks]);

  const { theme } = useThemeContext()

  return (
   <CenterBlockDiv>
      <CenterTitle  >Треки</CenterTitle>
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

    {allTracks.map((element, index) => (
                  <Track 
                  $IsTheme={theme}
                  trackId={trackId}
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
