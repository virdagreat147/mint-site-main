import React, {useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar(props) {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='nav-menu active'>
        {(toggleMenu || screenWidth > 500) && (
            <ul>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a target="blank" href={item.path}>
                    <span>{item.icon}</span>
                  </a>
                </li>
              );
            })}
            </ul>
        )}
        {screenWidth > 500 ? <></> : <button onClick={toggleNav} className="btn"><FaIcons.FaBars /></button>}
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
