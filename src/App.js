import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import FilmsList from './components/FilmsList';
import FilmDetail from './components/FilmDetail';
import './App.scss';



function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [currentFilm, setCurrentFilm] = useState(null);
  const [detailIsOpen, setDetailIsOpen] = useState(false);
  

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


  const keyDownHandler = (event) => {
    if ((event.code === 'KeyB') && detailIsOpen) {
      setDetailIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [detailIsOpen]);
  

  const allGenres = [];

  allMovies.forEach(movie => movie.genre_ids.forEach(
    genre => {
      if (!allGenres.includes(genre)) allGenres.push(genre);
    }
  ))

  allGenres.sort();

  

  const [currentFilter, setCurrentFilter] = useState('action');

  const setFilterHandler = (filter) => {
    setCurrentFilter(filter);
  }

  const setFilmHandler = (film) => {
    setCurrentFilm(film);
    setDetailIsOpen(true);
  }


  const filteredFilms = allMovies.filter(film => film.genre_ids.includes(currentFilter)).sort();
  

  return (
    <div className="off-canvas-container">
      <div className={`main-container ${detailIsOpen ? "shifted" : ""}`} data-en-horizontal>
        <Navigation menuItems={allGenres} filter={currentFilter} setFilter={setFilterHandler}/>
        <FilmsList films={filteredFilms} setFilm={setFilmHandler}/>
      </div>
      <FilmDetail isOpen={detailIsOpen} film={currentFilm} />
    </div>
    
  );
}

export default App;
