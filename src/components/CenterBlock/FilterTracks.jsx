import React, { useState, useEffect } from 'react';
import "./CenterBlock.css";
import Track from "../Track/Track";
import { CenterBlockDiv,CenterTitle,CenterPlaylistTitle,CenterPlaylist,CenterPlaylistCol1,CenterPlaylistCol2,CenterPlaylistCol3,CenterPlaylistCol4,CenterblockContent } from "./CenterBlock.jsx";


const FilteredTracksContent = ({ tracks, trackId }) => {


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
        {tracks ? (
        <CenterPlaylist >
          {tracks.map((element, index) => (
                  <Track 
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
export default FilteredTracksContent;
