import s from './NavBar.module.scss'
import NavBarLinks from './NavBarLinks/NavBarLinks'
import Logo from './Logo/Logo'
import CurrencySelect from '../../UI/CurrencySelect/CurrencySelect'
import CartDropdown from '../../Features/CartDropdown'

const NavBar = () => {
  return (
    <nav>
      <div className={`container ${s.nav}`}>
        <NavBarLinks />
        <Logo className={s.logo} />
        <div className={s.tooltip}>
          <CurrencySelect />
          <CartDropdown />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
