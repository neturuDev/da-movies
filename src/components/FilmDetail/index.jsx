import FilmContent from './FilmContent';
import ReactDelayed from 'react-delayed';
import './index.scss';

const FilmDetail = ({film, isOpen}) => {

  return(
    <div className={`film-detail ${isOpen ? "is-open" : ""}`}>
      <ReactDelayed mounted={isOpen} unmountAfter={200}>
        <FilmContent film={film} isOpen={isOpen} />
      </ReactDelayed>
    </div>
  )
}

export default FilmDetail;