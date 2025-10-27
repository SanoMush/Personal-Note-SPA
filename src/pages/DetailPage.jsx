import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import { LocaleContext } from '../contexts/LocaleContext';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    async function fetchNote() {
      setLoading(true);
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      }
      setLoading(false);
    }
    fetchNote();
  }, [id]);

  async function onDeleteHandler(id) {
    const { error } = await deleteNote(id);
    if (!error) {
      navigate(note.archived ? '/archives' : '/');
    }
  }

  async function onArchiveHandler(id) {
    const { error } = note.archived ? await unarchiveNote(id) : await archiveNote(id);
    if (!error) {
      navigate(note.archived ? '/' : '/archives');
    }
  }

  if (loading) {
    return <p className="loading-indicator">{locale === 'id' ? 'Memuat catatan...' : 'Loading note...'}</p>;
  }

  if (!note) {
    return <p>{locale === 'id' ? 'Catatan tidak ditemukan!' : 'Note not found!'}</p>;
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

export default DetailPage;