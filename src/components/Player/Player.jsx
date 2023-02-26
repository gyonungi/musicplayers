import React, { useEffect, useRef, useState } from "react";
import { BarPlayerAudio,BarDiv,BarContent,BarPlayerProgress,BarPlayerBlock,BarPlayer,BarPlayerControls,BarPlayerBtnPrev,BarPlayerBtnSVG,BarPlayerPlay,BarPlayerPlaySVG,BarPlayerBtnNext,BarPlayerBtnNextSVG,BarPlayerBtnRepeat,BarPlayerBtnRepeatSVG,BarPlayerBtnShuffle,BarPlayerBtnShuffleSVG,PlayerTrackPlay,PlayerTrackContain,PlayerTrackImage,TrackPlayerTrackSVG,PlayerTrackAuthor,PlayerTrackAuthorLink,PlayerTrackAlbum,PlayerTrackAlbumLink,PlayerTrackLikeDis,PlayerTrackLike,TrackPlayerTrackLikeSVG,PlayerTrackDisLike,TrackPlayerTrackDisLikeSVG,BarVolumeBlock,BarVolumeContent,BarVolumeImage,BarVolumeSVG,BarVolumeProgress,BarVolumeProgressLine } from "./Player.styled";
import mainSong from '../../Public/Bobby_Marleni_Dropin.mp3';
import { useThemeContext } from "../ThemeStore/Themestore";




function Playerbar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [trackProgress, setTrackProgress] = useState(0);

  const audioRef  = useRef(null)
  const intervalRef = useRef()

  useEffect(() => {
    if (isPlaying){
      audioRef.current.play()
    }else{
      audioRef.current.pause()
    }
    
  },[isPlaying])
 
 

  const onPlaying = () => {
    setTrackProgress(audioRef.current.currentTime);
  };
  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart
  
  const { theme } = useThemeContext()
  


  return (
    
    <BarDiv $IsTheme={theme}>
      <BarContent >
        <BarPlayerProgress 
                type="range"
                value={trackProgress}              
                 /> {trackProgress}
        <BarPlayerBlock>
          <BarPlayer>
            <BarPlayerControls>
              <BarPlayerBtnPrev>
                <BarPlayerBtnSVG >
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </BarPlayerBtnSVG>
              </BarPlayerBtnPrev>
              <BarPlayerPlay $IsTheme={theme}  onClick={togglePlay} $IsPlaying={isPlaying}>
              <BarPlayerAudio $IsTheme={theme} controls  ref={audioRef} onTimeUpdate={onPlaying} >
              <source  src={mainSong} type="audio/mpeg"/>
              </BarPlayerAudio>
                <BarPlayerPlaySVG $IsTheme={theme}>
                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </BarPlayerPlaySVG>
              </BarPlayerPlay>
              <BarPlayerBtnNext $IsTheme={theme}>
                <BarPlayerBtnNextSVG>
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </BarPlayerBtnNextSVG>
              </BarPlayerBtnNext>
              <BarPlayerBtnRepeat $IsTheme={theme}>
                <BarPlayerBtnRepeatSVG>
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </BarPlayerBtnRepeatSVG>
              </BarPlayerBtnRepeat>
              <BarPlayerBtnShuffle $IsTheme={theme}>
                <BarPlayerBtnShuffleSVG >
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
                <PlayerTrackLike $IsTheme={theme}>
                  <TrackPlayerTrackLikeSVG alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </TrackPlayerTrackLikeSVG>
                </PlayerTrackLike>
                <PlayerTrackDisLike $IsTheme={theme}>
                  <TrackPlayerTrackDisLikeSVG alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </TrackPlayerTrackDisLikeSVG>
                </PlayerTrackDisLike>
              </PlayerTrackLikeDis>
            </PlayerTrackPlay>
          </BarPlayer>

          <BarVolumeBlock>
            <BarVolumeContent>
              <BarVolumeImage $IsTheme={theme}>
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
