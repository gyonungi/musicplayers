import React, { useEffect, useRef, useState } from "react";
import { BarPlayerAudio,BarDiv,BarContent,BarPlayerProgress,BarPlayerBlock,BarPlayer,BarPlayerControls,BarPlayerBtnPrev,BarPlayerBtnSVG,BarPlayerPlay,BarPlayerPlaySVG,BarPlayerBtnNext,BarPlayerBtnNextSVG,BarPlayerBtnRepeat,BarPlayerBtnRepeatSVG,BarPlayerBtnShuffle,BarPlayerBtnShuffleSVG,PlayerTrackPlay,PlayerTrackContain,PlayerTrackImage,TrackPlayerTrackSVG,PlayerTrackAuthor,PlayerTrackAuthorLink,PlayerTrackAlbum,PlayerTrackAlbumLink,PlayerTrackLikeDis,PlayerTrackLike,TrackPlayerTrackLikeSVG,PlayerTrackDisLike,TrackPlayerTrackDisLikeSVG,BarVolumeBlock,BarVolumeContent,BarVolumeImage,BarVolumeSVG,BarVolumeProgress,BarVolumeProgressLine } from "./Player.jsx";
import mainSong from '../../Public/Bobby_Marleni_Dropin.mp3';





function Playerbar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef  = useRef(null)
  const intervalRef = useRef()

  useEffect(() => {
    if (isPlaying){
      audioRef.current.play()
    }else{
      audioRef.current.pause()
    }
    
  },[isPlaying])

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart


  


  return (
    
    <BarDiv>
      <BarContent>
        <BarPlayerProgress></BarPlayerProgress>
        <BarPlayerBlock>
          <BarPlayer>
            <BarPlayerControls>
              <BarPlayerBtnPrev>
                <BarPlayerBtnSVG >
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </BarPlayerBtnSVG>
              </BarPlayerBtnPrev>
              <BarPlayerPlay onClick={togglePlay} $IsPlaying={isPlaying}>
              <BarPlayerAudio  controls textTracks ref={audioRef} >
              <source  src={mainSong} type="audio/mpeg"/>
              </BarPlayerAudio>
                <BarPlayerPlaySVG >
                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </BarPlayerPlaySVG>
              </BarPlayerPlay>
              <BarPlayerBtnNext>
                <BarPlayerBtnNextSVG>
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </BarPlayerBtnNextSVG>
              </BarPlayerBtnNext>
              <BarPlayerBtnRepeat>
                <BarPlayerBtnRepeatSVG>
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </BarPlayerBtnRepeatSVG>
              </BarPlayerBtnRepeat>
              <BarPlayerBtnShuffle>
                <BarPlayerBtnShuffleSVG>
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </BarPlayerBtnShuffleSVG>
              </BarPlayerBtnShuffle>
            </BarPlayerControls>

            <PlayerTrackPlay>
              <PlayerTrackContain>
                <PlayerTrackImage>
                  <TrackPlayerTrackSVG>
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </TrackPlayerTrackSVG>
                </PlayerTrackImage>
                <PlayerTrackAuthor>
                  <PlayerTrackAuthorLink href="http://">
                    Ты та...
                  </PlayerTrackAuthorLink>
                </PlayerTrackAuthor>
                <PlayerTrackAlbum>
                  <PlayerTrackAlbumLink href="http://">
                    Баста
                  </PlayerTrackAlbumLink>
                </PlayerTrackAlbum>
              </PlayerTrackContain>

              <PlayerTrackLikeDis>
                <PlayerTrackLike>
                  <TrackPlayerTrackLikeSVG alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </TrackPlayerTrackLikeSVG>
                </PlayerTrackLike>
                <PlayerTrackDisLike>
                  <TrackPlayerTrackDisLikeSVG alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </TrackPlayerTrackDisLikeSVG>
                </PlayerTrackDisLike>
              </PlayerTrackLikeDis>
            </PlayerTrackPlay>
          </BarPlayer>

          <BarVolumeBlock>
            <BarVolumeContent>
              <BarVolumeImage>
                <BarVolumeSVG alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </BarVolumeSVG>
              </BarVolumeImage>
              <BarVolumeProgress>
                <BarVolumeProgressLine
                  type="range"
                  name="range"
                ></BarVolumeProgressLine>
              </BarVolumeProgress>
            </BarVolumeContent>
          </BarVolumeBlock>
        </BarPlayerBlock>
      </BarContent>
    </BarDiv>
  );
}

export default Playerbar;
