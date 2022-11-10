import s from './Home.module.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { State } from '../../types/Types'
const Home = () => {
  const categories = useSelector((state: State) => state.products.categories)

  const banners = categories.map(category => {
    const { name, products, id } = category
    const { images } = products[0]
    return (
      <Link key={`${name}_${id}`} to={`/${name}`} className={s.home__banner}>
        <div className={s.home__shadow} />
        <h3>{name}</h3>
        <img src={images[0]} alt={`${name}_img`} />
      </Link>
    )
  })

  return <div className={s.home}>{banners}</div>
}

export default Home
