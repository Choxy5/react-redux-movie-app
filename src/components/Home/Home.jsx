import React, { useEffect } from 'react';
import './Home.scss';

import { MovieListing } from '../MovieListing/MovieListing';

import movieApi from '../../common/API/movieApi';
import { APIKey } from '../../common/API/MovieApiKey';

export function Home() {
  useEffect(() => {
    const movieText = 'Harry';
    async function fetchMovies() {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      console.log('The response from API', response);
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
