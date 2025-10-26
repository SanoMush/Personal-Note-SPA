import React, { useState } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { getInitialData } from './utils';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [notes, setNotes] = useState(getInitialData());

  const [keyword, setKeyword] = useState(() => {

    return searchParams.get('keyword') || '';
  });

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  function onDeleteHandler(id) {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  function onArchiveHandler(id) {
    const newNotes = notes.map(note => 
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(newNotes);
  }

  function onAddNoteHandler({ title, body }) {
    setNotes([...notes, {
      id: `notes-${+new Date()}`,
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    }]);
  }
  
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const activeNotes = filteredNotes.filter(note => !note.archived);
  const archivedNotes = filteredNotes.filter(note => note.archived);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Aplikasi Catatan</h1>
        <Navigation />
      </header>
      <main>
        {}
        <Routes>
          {}
          <Route 
            path="/" 
            element={
              <HomePage 
                notes={activeNotes} 
                keyword={keyword}
                onKeywordChange={onKeywordChangeHandler}
              />
            } 
          />
          {}
          <Route 
            path="/archives" 
            element={
              <ArchivePage 
                notes={archivedNotes} 
                keyword={keyword}
                onKeywordChange={onKeywordChangeHandler}
              />
            } 
          />
          {}
          <Route 
            path="/notes/new" 
            element={<AddPage onAddNote={onAddNoteHandler} />} 
          />
          {}
          <Route 
            path="/notes/:id" 
            element={
              <DetailPage 
                notes={notes}
                onDelete={onDeleteHandler}
                onArchive={onArchiveHandler}
              />
            } 
          />
          {}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;