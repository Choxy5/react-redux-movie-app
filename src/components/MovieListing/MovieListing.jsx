import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import './MovieListing.scss';

export function MovieListing() {
  const movies = useSelector(getAllMovies);
  console.log(movies)
  return <div>Movie Listing</div>;
}
