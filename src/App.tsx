import React, { useState, useEffect } from 'react'


import MovieCard from './components/MovieCard'
import SearchIcon from './assets/search.svg'
import './App.css'

const API_URL: string = "http://www.omdbapi.com?apikey=b6003d8a";



const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [movies, setMovies] = useState<movies[]>([]);
  
  
  const searchMovies = async (title: string): Promise<void> => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  }
  
  
  useEffect(() => {
    searchMovies('Superman');
  }, []);
  
  
  return (
    <>
     <div className="app">
       <h1> Movieland </h1>
       
       
       <div className="search">
        <input 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
         />
         
         <img 
           src={SearchIcon}
           alt="Search Icon"
           onClick={() => searchMovies(searchTerm)}
         />
       </div>
       
       
       {movies.length > 0 ? (
         <div className="container">
           {movies.map(movie => {
             <MovieCard movie={movie} />
           })}
         </div>
       ) : (
          <div className="empty">
            <h2> No movies found </h2>
          </div>
       )}
       
     </div>
    </>
  );
};

export default App
