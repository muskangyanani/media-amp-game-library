import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAWG_API_KEY; 

const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

export const getGames = (params) =>
  api.get(`/games?key=${API_KEY}`, { params });

export const getGameDetails = (id) =>
  api.get(`/games/${id}?key=${API_KEY}`);

export const getScreenshots = (id) =>
  api.get(`/games/${id}/screenshots?key=${API_KEY}`);
