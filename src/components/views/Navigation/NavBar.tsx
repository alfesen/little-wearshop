import NavBarLinks from './NavBarLinks/NavBarLinks'
import Logo from './Logo/Logo'
import CartDropdown from '../CartDropdown/CartDropdown'
import CurrencySelect from '../../controllers/CurrencySelect/CurrencySelect'

import s from './NavBar.module.scss'

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
