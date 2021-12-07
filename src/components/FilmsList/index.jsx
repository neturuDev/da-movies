import { Grid } from 'elements-navigation/react';
import FilmCard from './FilmCard';
import './index.scss';

const FilmsList = ({films}) => {
  return(
    <div className="films-list" data-en-active>
      <Grid>
        {films.map((film, idx) => {
          return <FilmCard title={film.title} poster={film.poster_path} />
        })}
      </Grid>
    </div>
  )
}

export default FilmsList;