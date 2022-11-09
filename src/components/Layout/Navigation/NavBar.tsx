import s from './NavBar.module.scss'
import NavBarLinks from './NavBarLinks/NavBarLinks'
import Logo from './Logo/Logo'
import CartButton from '../../UI/CartButton/CartButton'
import CurrencySelect from '../../UI/CurrencySelect/CurrencySelect'

const NavBar = () => {
  return (
    <nav>
      <div className={`container ${s.nav}`}>
        <NavBarLinks />
        <Logo className={s.logo} />
        <div className={s.tooltip}>
          <CurrencySelect />
          <CartButton />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
