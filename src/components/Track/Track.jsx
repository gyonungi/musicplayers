import React from 'react'

import { TrackDiv,TrackTitle,TrackTitleImg,TrackTitleSVG,TrackTitleText,TrackTitleLink,TrackTitleSpan,TrackAuthor,TrackAuthorLink,TrackAlbum,TrackAlbumLink,TrackTimeSVG,TrackTimeText } from './Track.styled'

const PlaylistItem = ({ id, track, artist, album, time, trackId, favTracks }) => {
  const handleTrackId = () => {
    trackId(id);
  };


  function fancyTimeFormat(duration) {
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;
    let timetrack = '';

    if (hrs > 0) {
      timetrack += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    timetrack += '' + mins + ':' + (secs < 10 ? '0' : '');
    timetrack += '' + secs;
    return timetrack;
  }
  return (
      <TrackDiv>
        <TrackTitle onClick={handleTrackId}>
          <TrackTitleImg>
            <TrackTitleSVG >
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </TrackTitleSVG>
          </TrackTitleImg>
          <TrackTitleText>
            <TrackTitleLink  href="http://">
              Mode <TrackTitleSpan>{track}</TrackTitleSpan>
            </TrackTitleLink>
          </TrackTitleText>
        </TrackTitle>
        <TrackAuthor>
          <TrackAuthorLink href="http://">
          {artist}
          </TrackAuthorLink>
        </TrackAuthor>
        <TrackAlbum>
          <TrackAlbumLink href="http://">
                {album}    
          </TrackAlbumLink>
        </TrackAlbum>
        <div className="track__time">
          <TrackTimeSVG alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </TrackTimeSVG>
          <TrackTimeText >{fancyTimeFormat(time)}</TrackTimeText>
        </div>
      </TrackDiv>
   
  )
}

export default PlaylistItem
