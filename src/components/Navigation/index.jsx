import { useState } from 'react';
import NavItem from './NavItem';
import './index.scss';

const Navigation = ({menuItems, filter, setFilter}) => {

  return(
    <div className="navigation">
      <div className="heading"><h1>Filmer</h1></div>
      <nav className="nav-block" data-en-vertical data-en-default>
        {menuItems.map((item, i) => (
          <NavItem 
            item={item} 
            key={item} 
            active={filter === item}
            onFocus={e => e.preventDefault() || setFilter(item)}
            />
        ))}
      </nav>
    </div>
  )
}

export default Navigation;