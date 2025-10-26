import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';

function DetailPage({ notes, onDelete, onArchive }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find(note => note.id === id);

  if (!note) {
    return <p>Catatan tidak ditemukan!</p>; 
  }

  function onDeleteHandler(id) {
    onDelete(id);
    navigate(note.archived ? '/archives' : '/');
  }
  
  function onArchiveHandler(id) {
    onArchive(id);
    navigate(note.archived ? '/' : '/archives');
  }

  return (
    <section className="detail-page">
      <NoteDetail 
        {...note}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
      />
    </section>
  );
}

DetailPage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default DetailPage;