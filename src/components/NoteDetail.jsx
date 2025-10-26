import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive }) {
  return (
    <div className="note-detail">
      <h2 className="note-detail__title">{title}</h2>
      <p className="note-detail__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-detail__body">{body}</p>
      <div className="note-detail__actions">
        {}
        <button className="note-detail__delete-button" onClick={() => onDelete(id)}>
          Hapus
        </button>
        {}
        <button className="note-detail__archive-button" onClick={() => onArchive(id)}>
          {archived ? 'Pindahkan dari Arsip' : 'Arsipkan'}
        </button>
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteDetail;