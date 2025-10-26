import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h2>404 - Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang Anda cari tidak ada.</p>
      <p>
        <Link to="/">Kembali ke Halaman Utama</Link>
      </p>
    </section>
  );
}

export default NotFoundPage;