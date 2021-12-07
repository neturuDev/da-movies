import './index.scss';

const FilmDetail = ({film}) => {
  return(
    <div className="film-detail">
      <div className="film-heading">{film.title}</div>
      <div className="data-wrapper">
        <div className="film-data">
          {film.release_date}
        </div>
        <img src={film.poster_path} alt="film.title" />
      </div>
      <div className="overview">{film.overview}</div>
    </div>
  )
}

export default FilmDetail;