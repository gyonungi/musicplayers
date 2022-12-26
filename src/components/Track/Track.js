import React from 'react'

import { TrackDiv,TrackTitle,TrackTitleImg,TrackTitleSVG,TrackTitleText,TrackTitleLink,TrackTitleSpan,TrackAuthor,TrackAuthorLink,TrackAlbum,TrackAlbumLink,TrackTime,TrackTimeSVG,TrackTimeText } from './Track.jsx'


const Track = (props) => {
  return (
      <TrackDiv>
        <TrackTitle>
          <TrackTitleImg>
            <TrackTitleSVG >
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </TrackTitleSVG>
          </TrackTitleImg>
          <TrackTitleText>
            <TrackTitleLink  href="http://">
            {props.name} Mode <TrackTitleSpan></TrackTitleSpan>
            </TrackTitleLink>
          </TrackTitleText>
        </TrackTitle>
        <TrackAuthor>
          <TrackAuthorLink href="http://">
          {props.label}
          </TrackAuthorLink>
        </TrackAuthor>
        <TrackAlbum>
          <TrackAlbumLink href="http://">
           {props.album}
          </TrackAlbumLink>
        </TrackAlbum>
        <div className="track__time">
          <TrackTimeSVG alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </TrackTimeSVG>
          <TrackTimeText >4:44</TrackTimeText>
        </div>
      </TrackDiv>
   
  )
}

export default Track
