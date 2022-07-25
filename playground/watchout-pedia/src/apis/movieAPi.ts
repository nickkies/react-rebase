import axiosInstance from 'apis';

export const latestApi = () => axiosInstance.get('/movie/latest');

export const upcommingApi = () => axiosInstance.get('/movie/upcomming');

export const nowPlayingApi = () => axiosInstance.get('/movie/top_rate');

export const popularApi = () => axiosInstance.get('/movie/popular');

export const detailApi = (movieId: string) =>
  axiosInstance.get(`/movie/${movieId}`);

export const similarApi = (movieId: string) =>
  axiosInstance.get(`/movie/${movieId}/similar`);

export const searchApi = (query: string) =>
  axiosInstance.get(`/search/movie?query=${query}`);
