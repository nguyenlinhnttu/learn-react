import {apiFetch} from './api';
import type {User} from '../types/user.type';

const BASE_URL = "https://jsonplaceholder.typicode.com";

export function fetchUsers(signal?: AbortSignal) {
  return apiFetch<User[]>(`${BASE_URL}/users`, { signal });
}

export function fetchUserById(
  id: string,
  signal?: AbortSignal
) {
  return apiFetch<User>(`${BASE_URL}/users/${id}`, { signal });
}