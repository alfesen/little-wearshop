import { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { State } from '../../../../types/Types'
import { navActions } from '../../../../store/nav-slice'

import s from './NavBarLinks.module.scss'

const burger = (
  <svg viewBox='0 0 100 80' width='40' height='40'>
    <rect width='100' fill='#fff' height='20'></rect>
    <rect y='30' fill='#fff' width='100' height='20'></rect>
    <rect y='60' fill='#fff' width='100' height='20'></rect>
  </svg>
)

const NavBarLinks = () => {
  const categories = useSelector((state: State) => state.products.categories)
  const showNav = useSelector((state: State) => state.nav.show)
  const dispatch = useDispatch()

  const showBurger = window.innerWidth < 552 && true
  const [burgerVisible, setBurgerVisible] = useState(showBurger)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 552) {
        setBurgerVisible(true)
      } else {
        setBurgerVisible(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNav = () => {
    dispatch(navActions.toggleNav())
  }

  const navLinks = categories.map(c => {
    return (
      <NavLink
        onClick={handleNav}
        className={({ isActive }) =>
          isActive ? `${s.nav__link} ${s.active}` : s.nav__link
        }
        key={`${c.id}_key`}
        to={`/${c.name}`}>
        {c.name}
      </NavLink>
    )
  })

  return (
    <Fragment>
      {burgerVisible && (
        <button onClick={handleNav} className={s.burger}>
          {burger}
        </button>
      )}
      <div className={`${s.nav__links} ${showNav && s.dropdown}`}>
        {navLinks}
      </div>
    </Fragment>
  )
}

export default NavBarLinks
