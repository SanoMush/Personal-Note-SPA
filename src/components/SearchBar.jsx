import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, onKeywordChange }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Cari berdasarkan judul..."
        value={keyword}
        onChange={(event) => onKeywordChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};

export default SearchBar;