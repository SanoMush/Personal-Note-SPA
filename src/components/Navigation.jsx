import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home (Aktif)</Link></li>
        <li><Link to="/archives">Arsip</Link></li>
        <li><Link to="/notes/new">Tambah Baru</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;