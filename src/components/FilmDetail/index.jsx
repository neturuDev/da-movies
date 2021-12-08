import FilmContent from './FilmContent';
import './index.scss';

const FilmDetail = ({film, isOpen}) => {



  return(
    <div className={`film-detail ${isOpen ? "is-open" : ""}`}>
      {isOpen && <FilmContent film={film} isOpen={isOpen} />}
      
    </div>
  )
}

export default FilmDetail;