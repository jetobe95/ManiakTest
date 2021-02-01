import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const httpClient = axios.create({baseURL: 'https://challenge.maniak.co/api'});

httpClient.interceptors.request.use(async (config) => {
    const jwt = await AsyncStorage.getItem('userToken');
  if (config.url === '/images') {
    if (jwt) {
      config.headers['Authorization'] = `Bearer ${jwt}`;
    }
  }
  return config;
});
export default httpClient;
