import axios from 'axios';
const KEY = process.env.YOUTUBE_API_KEY;

export const snippet = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY,
  },
});
