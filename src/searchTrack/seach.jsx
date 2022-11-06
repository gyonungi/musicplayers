import '../src/searchTrack/seach.css';
export default function SearchTrack(){

return(<div className="centerblock__search search">
<svg className="search__svg">
    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
</svg>    
<input className="search__text" type="search" placeholder="Поиск" name="search"/> 
</div>
)
}