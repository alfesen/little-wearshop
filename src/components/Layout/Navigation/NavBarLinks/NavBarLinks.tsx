import { useState, useEffect, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import s from './NavBarLinks.module.scss'
import { ProductState } from '../../../../types/Types'

const NavBarLinks = () => {
  const categories = useSelector((state: ProductState) => state.categories)
  const navLinks = categories.map(c => {
    return (
      <NavLink className={s.nav__link} key={`${c.id}_key`} to={`/${c.name}`}>
        {c.name}
      </NavLink>
    )
  })

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

  const handleNav = () => {
    console.log('click')
    setShowNavLinks(!showNavLinks)
  }

  return (
    <Fragment>
      {burgerVisible && <button onClick={handleNav}>{burger}</button>}
      <div className={`${s.nav__links} ${showNavLinks && s.dropdown}`}>
        {navLinks}
      </div>
    </Fragment>
  )
}

export default NavBarLinks
