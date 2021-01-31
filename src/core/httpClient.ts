import axios from 'axios';

const httpClient = axios.create({baseURL: 'challenge.maniak.co/api'});
export default httpClient;
