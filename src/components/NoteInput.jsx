import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TITLE_CHAR_LIMIT = 50;

function NoteInput({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleCharCount, setTitleCharCount] = useState(TITLE_CHAR_LIMIT);

  function onTitleChangeHandler(event) {
    const newTitle = event.target.value;
    if (newTitle.length <= TITLE_CHAR_LIMIT) {
      setTitle(newTitle);
      setTitleCharCount(TITLE_CHAR_LIMIT - newTitle.length);
    }
  }

  function onBodyChangeHandler(event) {
    setBody(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    onAddNote({ title, body });
    setTitle('');
    setBody('');
    setTitleCharCount(TITLE_CHAR_LIMIT);
  }

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      <p className="note-input__title-char-limit">
        Sisa karakter judul: {titleCharCount}
      </p>
      <input 
        type="text" 
        placeholder="Judul Catatan..." 
        value={title} 
        onChange={onTitleChangeHandler}
        required 
      />
      <textarea 
        placeholder="Tulis catatanmu di sini..." 
        value={body} 
        onChange={onBodyChangeHandler}
        required
      ></textarea>
      <button type="submit">Buat Catatan</button>
    </form>
  );
}

NoteInput.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default NoteInput;