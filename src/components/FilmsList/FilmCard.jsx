const FilmCard = ({title, poster, onSelect}) => {
  return(
    <a 
      href="#" 
      className="film-card" 
      onClick={onSelect} 
      style={{backgroundImage: `url(${poster})`}}
      >
      
    </a>
  )
}

export default FilmCard;