import React from 'react';
import PropTypes from 'prop-types';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

function ArchivePage({ notes, keyword, onKeywordChange }) {
  return (
    <section className="archive-page">
      <h2>Catatan Arsip</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChange} />
      <NoteList notes={notes} emptyMessage="Arsip kosong" />
    </section>
  );
}

ArchivePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};

export default ArchivePage;