import axios from 'axios';

export default function getScore() {
  return axios.get('https://go-english-rbastiansch.c9users.io/api/score')
    .then(response => response.data.data);
}
