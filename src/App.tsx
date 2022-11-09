import NavBar from './components/Layout/Navigation/NavBar'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from './types/Types'
import { Category } from './types/Types'
import ProductList from './components/Features/ProductList'

function App() {
  const categories = useSelector((state: State) => state.products.categories)

  const routes = categories.map((c: Category) => {
    return (
      <Route key={c.id} path={`/${c.name}`}>
        <ProductList category={c} />
      </Route>
    )
  })

  return (
    <div className='App'>
      <NavBar />
      <section className='container'>
        <Switch>{routes}</Switch>
      </section>
    </div>
  )
}

export default App
