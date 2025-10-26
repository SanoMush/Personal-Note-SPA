import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';

function AddPage({ onAddNote }) {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    onAddNote(note);
    navigate('/');
  }

  return (
    <section className="add-new-page">
      <h2>Buat catatan baru</h2>
      <NoteInput onAddNote={onAddNoteHandler} />
    </section>
  );
}

AddPage.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default AddPage;