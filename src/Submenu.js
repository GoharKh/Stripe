import React, { useState, useRef, useEffect, useContext } from 'react'

import { AppContext } from './context'

const Submenu = () => {
  const [columns, setColumns] = useState('col-2')
  const {isSubmenuOpen, location, page: {page, links}} = useContext(AppContext)
  const container = useRef()

  useEffect(() => {
      const {center, bottom} = location
      setColumns('col-2')
      container.current.style.left = `${center}px`
      container.current.style.top = `${bottom}px`

      if(links.length === 3) {
          setColumns('col-3')
      }
      if(links.length > 3) {
          setColumns('col-4')
      }
  }, [location, links])

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
              const {label, url, icon} = link
              return <a key={index} href={url}>
                  {icon}
                  {label}
              </a>
          })}
      </div>
    </aside>
  )
}

export default Submenu