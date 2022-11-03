import s from './NavBar.module.scss'
import NavBarLinks from './NavBarLinks/NavBarLinks'
import Logo from './Logo/Logo'
import CartButton from './CartButton/CartButton'

const NavBar = () => {
  return (
    <nav>
      <div className={`container ${s.nav}`}>
        <NavBarLinks />
        <Logo className={s.logo} />
        <CartButton />
      </div>
    </nav>
  )
}

export default NavBar
