import s from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav>
      <div className={`container ${s.nav}`}>
        <div>links</div>
        <div>logo</div>
        <div>cartButton</div>
      </div>
    </nav>
  )
}

export default NavBar
