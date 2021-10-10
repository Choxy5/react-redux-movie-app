import React, { useEffect } from 'react';
import './Home.scss';

import { MovieListing } from '../MovieListing/MovieListing';

import movieApi from '../../common/API/movieApi';
import { APIKey } from '../../common/API/MovieApiKey';

import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = 'Harry';
    async function fetchMovies() {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      dispatch(addMovies(response.data));
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}
