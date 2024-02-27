import axios from 'axios';

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Allow-Control-Allow-Origin': '*', // Required for CORS support to work
     
  },
});
