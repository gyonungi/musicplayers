
import './App.css';
import BurgerLine from './burger__line/burger';
import './Menu__Item/MenuItem';
import MenuItem from './Menu__Item/MenuItem';
import sidebarItem from './sidebar_item/sidebarItem'
import searchTrack from './searchTrack/seach'
import filterTrack from './filter__track/filterTrack'
import playlistItem from './playlist_item/playlist__item'

function App() {
  return (
            <body>
                <searchTrack></searchTrack>
                <sidebarItem></sidebarItem>
                <BurgerLine> </BurgerLine>
                <MenuItem> </MenuItem>
                <filterTrack></filterTrack>
                <playlistItem></playlistItem>
              </body>
 
  );
}

export default App;
