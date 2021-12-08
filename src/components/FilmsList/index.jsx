import { Grid } from 'elements-navigation/react';
import FilmCard from './FilmCard';
import './index.scss';

const FilmsList = ({films, setFilm}) => {
  return(
    <div className="films-list" data-en-active>
      <Grid>
        {films.map((film) => {
          return (
            <FilmCard 
              title={film.title} 
              poster={film.poster_path} 
              key={film.title}
              onSelect={e => e.preventDefault() || setFilm(film)}
              />
            )
        })}
      </Grid>
    </div>
  )
}

export default FilmsList;