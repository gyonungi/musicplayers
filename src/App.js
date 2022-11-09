import SidebarItem from "./sidebar_item/sidebarItem";
import BurgerLine from "./burger__line/burger";
import MenuItem from "./Menu__Item/MenuItem";
import SearchTrack from "./searchTrack/seach";
import FilterTrack from "./filter__track/filterTrack";
import PlaylistItem from "./playlist_item/playlist__item";
import PlaylistTitle from "./playlist_title/playlist_title"
import BarPlayer from "./MusPlayer/Bar_player";
import Skylogo from "./skylogo/sky_logo";

function App() {
  return (
    <div>
      <Skylogo/>
      <BurgerLine/>
      <MenuItem/>
      <SearchTrack/>
      <FilterTrack/>
      <PlaylistTitle/>
      <PlaylistItem/>
      <SidebarItem/>
      <BarPlayer/>
    </div>
  );
}


export default App;