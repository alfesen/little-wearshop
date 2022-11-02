import s from './NavBarLinks.module.scss'

const NavBarLinks = () => {
  return (
    <div className={s.nav__links}>
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
  )
}

export default NavBarLinks
