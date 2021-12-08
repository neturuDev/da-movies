import './index.scss';

const FilmDetail = ({film, isOpen}) => {
  return(
    <div className={`film-detail ${isOpen ? "is-open" : ""}`}>
      <div className="film-heading">{film.title}</div>
      <div className="data-wrapper">
        <div className="film-data">
          <div className="film-data-items">
            <div className="film-data-item">
            <div className="item-heading">Length</div>
            <div className="item-data">1 hour 23 min</div>
          </div>
          <div className="film-data-item center-item">
            <div className="item-heading">Country</div>
            <div className="item-data">USA</div>
          </div>
          <div className="film-data-item">
            <div className="item-heading">Language</div>
            <div className="item-data">English</div>
          </div>
          </div>
          
          <div className="detail-image" style={{backgroundImage: `url(${film.poster_path})`}}></div>
          <div className="action-area">
            <button className="action-btn play-btn">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
              play
            </button>
            <button className="action-btn">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
              trailer
            </button>
            <button className="action-btn">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M552,223.4h-91.9v-91.9c0-13.1-10.6-23.8-23.8-23.8h-23.8c-13.1,0-23.8,10.6-23.8,23.8v91.9H297c-13.1,0-23.8,10.6-23.8,23.8v23.8c0,13.1,10.6,23.8,23.8,23.8h91.9v91.9c0,13.1,10.6,23.8,23.8,23.8h23.8c13.1,0,23.8-10.6,23.8-23.8v-91.9H552c13.1,0,23.8-10.6,23.8-23.8v-23.8C575.8,234,565.1,223.4,552,223.4z"/>
                <path fill="currentColor" d="M16.3,135h166c8.8,0,16-7.2,16-16V79c0-8.8-7.2-16-16-16h-166c-8.8,0-16,7.2-16,16v40C0.3,127.8,7.4,135,16.3,135zM16.3,295h166c8.8,0,16-7.2,16-16v-40c0-8.8-7.2-16-16-16h-166c-8.8,0-16,7.2-16,16v40C0.3,287.8,7.4,295,16.3,295z M16.3,455h166c8.8,0,16-7.2,16-16v-40c0-8.8-7.2-16-16-16h-166c-8.8,0-16,7.2-16,16v40C0.3,447.8,7.4,455,16.3,455z"/>
              </svg>
              Playlist
            </button>
          </div>
        </div>
        <div className="overview">{film.overview}</div>
        
      </div>
      
    </div>
  )
}

export default FilmDetail;