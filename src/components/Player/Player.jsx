import styled from "styled-components";
import PlayerBtnPrevSVG from "../../images/icon/prev.svg"
import PlayerPlaySVG from "../../images/icon/play.svg"
import PlayerBtnNextSVG from "../../images/icon/next.svg"
import PlayerBtnRepeatSVG from "../../images/icon/repeat.svg"
import PlayerBtnShuffleSVG from "../../images/icon/shuffle.svg"
import PlayerTrackSVG from "../../images/icon/note.svg"
import PlayerTrackLikeSVG from "../../images/icon/like.svg"
import PlayerTrackDislikeSVG from "../../images/icon/dislike.svg"

export const BarDiv = styled.div`
position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
width: 100%;
    height: 5px;
    background: #2E2E2E;
`;

export const BarPlayerBlock = styled.div`
height: 73px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
`;

export const BarPlayer = styled.div`
 display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
`;

export const BarPlayerControls = styled.div`
 display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    padding: 0 27px 0 31px;
`;

export const BarPlayerBtnPrev = styled.div`
  padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  margin-right: 23px;
`;

export const BarPlayerBtnSVG= styled.svg`
  width: 15px;
    height: 14px; 
    background-image: url(${PlayerBtnPrevSVG});
`;

export const BarPlayerPlay = styled.div`
  padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  margin-right: 23px;
`;



export const BarPlayerPlaySVG= styled.svg`
width: 22px;
height: 20px;
fill: #D9D9D9;
background-image: url(${PlayerPlaySVG});
background-repeat: no-repeat;
`;

export const BarPlayerBtnNext = styled.div`
  padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
            margin-right: 28px;
            fill: #a53939;
`;

export const BarPlayerBtnNextSVG= styled.svg`
   width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #D9D9D9;
    background-image: url(${PlayerBtnNextSVG});
`;

export const BarPlayerBtnRepeat = styled.div`
  padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
            margin-right: 24px;
`;

export const BarPlayerBtnRepeatSVG= styled.svg`
    width: 21px;
    height: 18px;
    fill: transparent;
    stroke: #696969;
    background-image: url(${PlayerBtnRepeatSVG});
    background-repeat: no-repeat;
`;

export const BarPlayerBtnShuffle = styled.div`
  padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
            
`;

export const BarPlayerBtnShuffleSVG= styled.svg`
    width: 19px;
    height: 17px;
    fill: transparent;
    stroke: #696969;
    background-image: url(${PlayerBtnShuffleSVG});
    background-repeat: no-repeat;
`;

export const PlayerTrackPlay = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
            
`;

export const PlayerTrackContain = styled.div`
width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
        grid-template-columns: auto 1fr;
        grid-template-areas: "image author" "image album";
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
            
`;

export const PlayerTrackImage = styled.div`
width: 51px;
    height: 51px;
    background-color: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-right: 12px;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1;
    grid-area: image;
`;

export const TrackPlayerTrackSVG = styled.svg`
  width: 22px;
    height: 22px;
    fill: transparent;
    stroke: #4E4E4E;
    background-image: url(${PlayerTrackSVG});
    background-repeat: no-repeat;
`;

export const PlayerTrackAuthor = styled.div`
-ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: author;
    min-width: 49px;
`;

export const PlayerTrackAuthorLink = styled.a`
font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
`;

export const PlayerTrackAlbum = styled.div`
-ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: album;
    min-width: 49px;
`;

export const PlayerTrackAlbumLink = styled.a`
font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #FFFFFF;
`;

export const PlayerTrackLikeDis= styled.div`
 display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-left: 26%;
`;

export const PlayerTrackLike= styled.div`
padding: 5px;
`;

export const TrackPlayerTrackLikeSVG= styled.svg`
width: 17px;
    height: 16px;
    fill: transparent;
    stroke: #696969;
    background-image: url(${PlayerTrackLikeSVG});
    background-repeat: no-repeat;
`;

export const PlayerTrackDisLike= styled.div`
padding: 5px;
margin-left: 28.5px;
`;

export const TrackPlayerTrackDisLikeSVG= styled.div`
 width: 17px;
    height: 17px;
    fill: transparent;
    stroke: #696969;
    background-image: url(${PlayerTrackDislikeSVG});
    background-repeat: no-repeat;
`;

export const BarVolumeBlock= styled.div`
 width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 92px 0 0;
`;

export const BarVolumeContent= styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: end;
    -ms-flex-pack: end;
        justify-content: end;
`;

export const BarVolumeImage= styled.div`
width: 13px;
    height: 18px;
    margin-right: 17px;
`;

export const BarVolumeSVG= styled.svg`
width: 13px;
    height: 18px;
    fill: transparent;
`;

export const BarVolumeProgress= styled.div`
  width: 109px;
`;

export const BarVolumeProgressLine= styled.input`
  width: 109px;
`;

