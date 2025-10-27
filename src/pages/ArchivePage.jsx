import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/network-data';
import { LocaleContext } from '../contexts/LocaleContext';

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    async function fetchNotes() {
      setLoading(true);
      const { error, data } = await getArchivedNotes();
      if (!error) {
        setNotes(data);
      }
      setLoading(false);
    }
    fetchNotes();
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = useMemo(() => {
    return notes.filter(note => 
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [notes, keyword]);

  if (loading) {
    return <p className="loading-indicator">{locale === 'id' ? 'Memuat arsip...' : 'Loading archives...'}</p>;
  }

  return (
    <section className="archive-page">
      <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      <NoteList 
        notes={filteredNotes} 
        emptyMessage={locale === 'id' ? 'Arsip kosong' : 'Archive is empty'} 
      />
    </section>
  );
}

export default ArchivePage;