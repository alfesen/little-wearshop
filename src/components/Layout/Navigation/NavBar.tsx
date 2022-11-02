import s from './NavBar.module.scss'
import NavBarLinks from './NavBarLinks/NavBarLinks'

const NavBar = () => {
  return (
    <nav>
      <div className={`container ${s.nav}`}>
        <NavBarLinks />
        <div>logo</div>
        <div>cartButton</div>
      </div>
    </nav>
  )
}

export default NavBar
