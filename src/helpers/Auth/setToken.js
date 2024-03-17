import { api } from '../../api/api';

export function setToken(token) {
  api.defaults.headers.authorization = `Bearer ${token}`;
}

export function clearToken() {
  api.defaults.headers.authorization = ``;
}
