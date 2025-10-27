import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';
import { LocaleContext } from '../contexts/LocaleContext';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert(locale === 'id' ? 'Password dan Konfirmasi Password tidak cocok' : 'Password and Confirm Password do not match');
      return;
    }
    const { error } = await register({ name, email, password });
    if (!error) {
      alert(locale === 'id' ? 'Registrasi berhasil!' : 'Registration successful!');
      navigate('/login');
    }
  };

  return (
    <section className="register-page">
      <h2>{locale === 'id' ? 'Isi form untuk mendaftar' : 'Fill the form to register'}</h2>
      <form onSubmit={onSubmitHandler} className="input-register">
        <label htmlFor="name">{locale === 'id' ? 'Nama' : 'Name'}</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <label htmlFor="confirmPassword">{locale === 'id' ? 'Konfirmasi Password' : 'Confirm Password'}</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button type="submit">{locale === 'id' ? 'Daftar' : 'Register'}</button>
      </form>
      <p>
        {locale === 'id' ? 'Sudah punya akun?' : 'Already have an account?'} <Link to="/login">Login</Link>
      </p>
    </section>
  );
}

export default RegisterPage;