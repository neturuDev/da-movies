import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import './App.scss';



function App() {
  const [allMovies, setAllMovies] = useState([]);
  

  const getAllMovies = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/bdiadiun/technical-assignments/main/movieDataCollection.json');
      if (!response.ok) {
        throw new Error('Ответ сети был не ok.');
      }
      const allMovies = await response.json();
      setAllMovies(allMovies);
    } catch (error) {
      console.log('Возникла проблема с вашим fetch запросом: ', error.message);
    }
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  const allGenres = [];

  allMovies.forEach(movie => movie.genre_ids.forEach(
    genre => {
      if (!allGenres.includes(genre)) allGenres.push(genre);
    }
  ))

  allGenres.sort();

  const [currentFilter, setCurrentFilter] = useState(allGenres[0]);

  const setFilterHandler = (filter) => {
    setCurrentFilter(filter);
  }

  return (
    <div className="main-container">
      <Navigation menuItems={allGenres} filter={currentFilter} setFilter={setFilterHandler}/>
    </div>
  );
}

export default App;
