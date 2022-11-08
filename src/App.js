import SidebarItem from "./sidebar_item/sidebarItem";
import BurgerLine from "./burger__line/burger";
import MenuItem from "./Menu__Item/MenuItem";
import SearchTrack from "./searchTrack/seach";
import FilterTrack from "./filter__track/filterTrack";
import PlaylistItem from "./playlist_item/playlist__item";


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