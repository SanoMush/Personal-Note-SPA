import React from 'react';
import PropTypes from 'prop-types';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

function HomePage({ notes, keyword, onKeywordChange }) {
  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChange} />
      <NoteList notes={notes} emptyMessage="Tidak ada catatan aktif" />
    </section>
  );
}

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};

export default HomePage;