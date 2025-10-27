const BASE_URL = 'https://notes-api.dicoding.dev/v1';

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getUserLoggedIn() {
  return fetchWithToken(`${BASE_URL}/users/me`);
}

async function addNote({ title, body }) {
  return fetchWithToken(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  });
}

async function getActiveNotes() {
  return fetchWithToken(`${BASE_URL}/notes`);
}

async function getArchivedNotes() {
  return fetchWithToken(`${BASE_URL}/notes/archived`);
}

async function getNote(id) {
  return fetchWithToken(`${BASE_URL}/notes/${id}`);
}

async function archiveNote(id) {
  return fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
    method: 'POST',
  });
}

async function unarchiveNote(id) {
  return fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
    method: 'POST',
  });
}

async function deleteNote(id) {
  return fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: 'DELETE',
  });
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLoggedIn,
  addNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
};