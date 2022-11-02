import s from './NavBar.module.scss'
import NavBarLinks from './NavBarLinks/NavBarLinks'
import Logo from './Logo/Logo'
const NavBar = () => {
  return (
    <nav>
      <div className={`container ${s.nav}`}>
        <NavBarLinks />
        <Logo className={s.logo}/>
        <div>cartButton</div>
      </div>
    </nav>
  )
}

export default NavBar
