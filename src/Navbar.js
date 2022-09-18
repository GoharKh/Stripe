import React, {useContext} from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { AppContext } from './context'

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useContext(AppContext)

  const displaySubmenu = e => {
    const page = e.target.textContent
    const position = e.target.getBoundingClientRect()
    const center = (position.left + position.right) / 2
    const bottom = position.bottom - 3
    console.log(bottom)
    openSubmenu(page, {center, bottom})
  }

  const hideSubmenu = e => {
    if(!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  return (
    <nav className='nav' onMouseOver={hideSubmenu}>
      <div className='nav-center'>
        <div className='header'>
          <img src={logo} alt='stripe' className='nav-logo'/>
          <button className='btn toggle-btn' onClick={openSidebar}> <FaBars /> </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar