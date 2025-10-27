import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/network-data';
import { LocaleContext } from '../contexts/LocaleContext';

function AddPage() {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  async function onAddNoteHandler(note) {
    const { error } = await addNote(note);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className="add-new-page">
      <h2>{locale === 'id' ? 'Buat catatan baru' : 'Create new note'}</h2>
      <NoteInput onAddNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;