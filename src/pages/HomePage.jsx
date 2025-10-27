import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/network-data';
import { LocaleContext } from '../contexts/LocaleContext';

function HomePage() {
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
      const { error, data } = await getActiveNotes();
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
    return <p className="loading-indicator">{locale === 'id' ? 'Memuat catatan...' : 'Loading notes...'}</p>;
  }

  return (
    <section className="homepage">
      <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      <NoteList 
        notes={filteredNotes} 
        emptyMessage={locale === 'id' ? 'Tidak ada catatan aktif' : 'No active notes'} 
      />
    </section>
  );
}

export default HomePage;