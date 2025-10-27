import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUserLoggedIn, putAccessToken } from './utils/network-data';
import { LocaleContext } from './contexts/LocaleContext';

import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkLoginStatus() {
      const { error, data } = await getUserLoggedIn();
      if (!error) {
        setAuthedUser(data);
      }
      setInitializing(false);
    }
    checkLoginStatus();
  }, []);

  async function onLoginSuccessHandler(accessToken) {
    putAccessToken(accessToken); 
    const { error, data } = await getUserLoggedIn(); 
    if (!error) {
      setAuthedUser(data);
      navigate('/'); 
    }
  }

  function onLogoutHandler() {
    setAuthedUser(null);
    putAccessToken(''); 
    navigate('/login');
  }

  if (initializing) {
    return (
      <div className="app-container">
        <p className="loading-indicator">{locale === 'id' ? 'Memuat aplikasi...' : 'Loading application...'}</p>
      </div>
    );
  }

  if (authedUser === null) {
    return (
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage onLoginSuccess={onLoginSuccessHandler} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</h1>
        <Navigation 
          authedUser={authedUser} 
          logout={onLogoutHandler} 
        />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;