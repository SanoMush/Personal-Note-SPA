import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login } from '../utils/network-data';
import { LocaleContext } from '../contexts/LocaleContext';

function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { error, data } = await login({ email, password });
    if (!error) {
      onLoginSuccess(data.accessToken);
    }
  };

  return (
    <section className="login-page">
      <h2>{locale === 'id' ? 'Login untuk melanjutkan' : 'Login to continue'}</h2>
      <form onSubmit={onSubmitHandler} className="input-login">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>
        {locale === 'id' ? 'Belum punya akun?' : 'Don\'t have an account?'} <Link to="/register">Daftar</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;