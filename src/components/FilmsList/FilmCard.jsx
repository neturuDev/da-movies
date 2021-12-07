const FilmCard = ({title, poster, onSelect}) => {
  return(
    <a 
      href="#" 
      className="film-card" 
      onClick={onSelect} 
      >
      <div className="card-content" style={{backgroundImage: `url(${poster})`}}></div>
    </a>
  )
}

export default FilmCard;