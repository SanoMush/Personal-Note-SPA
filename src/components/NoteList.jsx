import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, emptyMessage }) {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">{emptyMessage}</p>;
  }

  return (
    <div className="notes-list">
      {notes.map(note => (
        <NoteItem 
          key={note.id} 
          {...note}
        />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  emptyMessage: PropTypes.string.isRequired,
};

export default NoteList;