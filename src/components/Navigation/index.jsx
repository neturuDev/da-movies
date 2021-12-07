import NavItem from './NavItem';
import './index.scss';

const Navigation = ({menuItems}) => {
  return(
    <div className="navigation">
      <div className="heading"><h1>Filmer</h1></div>
      <nav className="nav-block">
        {menuItems.map((item) => <NavItem item={item} key={item}/>)}
      </nav>
    </div>
  )
}

export default Navigation;