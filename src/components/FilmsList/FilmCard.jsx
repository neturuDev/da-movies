const FilmCard = ({poster, onSelect}) => {
  return(
    <a 
      href="#" 
      className="film-card" 
      onClick={onSelect} 
      >
      <div className="card-content" role="img" style={{backgroundImage: `url(${poster})`}}></div>
    </a>
  )
}

export default FilmCard;