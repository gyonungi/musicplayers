import './App.css';
import SidebarItem from './sidebar_item/sidebarItem';
import BurgerLine from './burger__line/burger';
import './Menu__Item/MenuItem';
import MenuItem from './Menu__Item/MenuItem';
import SearchTrack from './searchTrack/seach';
import FilterTrack from './filter__track/filterTrack';
import PlaylistItem from './playlist_item/playlistItem';

import { render, screen } from '@testing-library/react';

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

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
