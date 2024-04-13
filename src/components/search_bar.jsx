/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchterm, setSearchTerm] = useState('');
  // add this above your return
  const onInputChange = (event) => {
    props.onSearchChange(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div id="search-bar">
      <input onChange={onInputChange} value={searchterm} placeholder="search for video" />
    </div>
  );
};

export default SearchBar;
