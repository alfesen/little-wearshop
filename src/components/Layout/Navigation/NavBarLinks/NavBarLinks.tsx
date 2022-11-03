import { useState, useEffect, Fragment } from 'react'
import s from './NavBarLinks.module.scss'

const NavBarLinks = () => {
  const burger = (
    <svg viewBox='0 0 100 80' width='40' height='40'>
      <rect width='100' fill='#fff' height='20'></rect>
      <rect y='30' fill='#fff' width='100' height='20'></rect>
      <rect y='60' fill='#fff' width='100' height='20'></rect>
    </svg>
  )

  const showBurger = window.innerWidth < 552 && true

  const [burgerVisible, setBurgerVisible] = useState(showBurger)
  const [showNavLinks, setShowNavLinks] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 552) {
        setBurgerVisible(true)
      } else {
        setBurgerVisible(false)
      }
    }

    window.addEventListener('resize', handleResize)
  }, [])

  const handleNav = () => {console.log('click')
    setShowNavLinks(!showNavLinks)
  }

  return (
    <Fragment>
      {burgerVisible && <button onClick={handleNav}>{burger}</button>}
      <div className={`${s.nav__links} ${showNavLinks && s.dropdown}`}>
        <a href='a' className={s.nav__link}>
          link a
        </a>
        <a href='b' className={s.nav__link}>
          link b
        </a>
        <a href='c' className={s.nav__link}>
          link c
        </a>
      </div>
    </Fragment>
  )
}

export default NavBarLinks
