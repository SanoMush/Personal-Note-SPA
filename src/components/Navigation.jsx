import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/ThemeContext';
import { LocaleContext } from '../contexts/LocaleContext';

function Navigation({ authedUser, logout }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">{locale === 'id' ? 'Home' : 'Home'}</Link></li>
        <li><Link to="/archives">{locale === 'id' ? 'Arsip' : 'Archive'}</Link></li>
        <li><Link to="/notes/new">{locale === 'id' ? 'Tambah' : 'Add'}</Link></li>
        
        {}
        <li>
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
            {}
          </button>
        </li>
        
        {}
        <li>
          <button className="toggle-locale" onClick={toggleLocale}>
            {locale === 'id' ? 'EN' : 'ID'}
          </button>
        </li>
        
        {}
        <li>
          <button className="button-logout" onClick={logout}>
            {authedUser.name} (Logout)
            {}
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  authedUser: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Navigation;