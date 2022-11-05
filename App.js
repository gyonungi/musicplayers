import '../src/playlist_item/playlistItem.css';
import '../src/burger__line/burger.css';
import '../src/Menu__Item/menuitem.css';
import '../src/searchTrack/seach.css';
import '../src/sidebar_item/sidebar.css';
import '../src/filter__track/filter.css';
import './App.css';
import SidebarItem from './sidebar_item/sidebarItem';
import BurgerLine from './burger__line/burger';
import './Menu__Item/MenuItem';
import MenuItem from './Menu__Item/MenuItem';
import SearchTrack from './searchTrack/seach';
import FilterTrack from './filter__track/filterTrack';
import PlaylistItem from './playlist_item/playlistItem';

function App() {
  return (
            <div>
                <SearchTrack/>
                <SidebarItem/>
                <BurgerLine/> 
                <MenuItem/> 
                <FilterTrack/>
                <PlaylistItem/>
              </div>
 
  );
}

export default App;
