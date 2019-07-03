import http from '@/utils/http';
import api from '@/api';


export function serviceGetUserCollections(loginname) {
  return http.get(`${api.userCollections}${loginname}`);
}

export function serviceLogin(data) {
  return http.post(api.login, data);
}

export function serviceGetMessages() {
  return http.get(api.fetchMessages);
}