import React from 'react';
import search from '../../images/icon/search.svg'
import styles from './Search.module.scss'
import { useState, useEffect, useRef } from 'react';
import { useGetAllTracksQuery } from '../../backend/tracks'
const Search = () => {
  const { data: allTracks = [], error, isLoading } = useGetAllTracksQuery();
  const [searchInput, setSearchInput] = useState('');
  const [searchedTracks, setSearchedTracks] = useState(undefined);
  const [searchHidden, setSearchHidden] = useState(true);
  const [chosenTrack, setChosenTrack] = useState(undefined);
  const searchBoxRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!searchBoxRef.current.contains(e.target)) {
        setSearchHidden(true);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const getTrack = (e) => {
    e.preventDefault();
    setSearchInput(e.target.textContent);
    setChosenTrack(e.target.textContent);
    setSearchHidden(true);
  };

  useEffect(() => {
    if (searchedTracks === undefined) {
      return;
    }
    if (searchedTracks.length === 0) {
      setSearchHidden(true);
    }
  }, [searchedTracks]);

  useEffect(() => {
    if (chosenTrack) {
      const target = allTracks.find((track) => track.name === chosenTrack);
      console.log(target.id);
    }
  }, [chosenTrack]);



  useEffect(() => {
    if (allTracks) {
      setSearchedTracks(
        allTracks.filter((track) => {
          return track.name.toLowerCase().match(searchInput.toLowerCase());
        })
      );
    }
    if (searchInput.length !== 0) {
      setSearchHidden(false);
    } else {
      setSearchHidden(true);
    }
  }, [searchInput]);

  return (
    <div className={styles.centerblock__search}>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={handleChange}
        value={searchInput}
      />
      <div
        ref={searchBoxRef}
        className={
          searchHidden === true
            ? `${styles.search__result_box} ${styles.search_hidden}`
            : `${styles.search__result_box}`
        }
      >
        {searchedTracks
          ? searchedTracks.map((track,index) => (
              <div
                onClick={getTrack}
                className={styles.search__result_item}
                key={index}
              >
                {track.name}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
export default Search