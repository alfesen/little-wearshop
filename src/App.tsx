import NavBar from './components/Layout/Navigation/NavBar'
import { Switch, Route } from 'react-router-dom'
// import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { Category, ProductState } from './types/Types'

function App() {
  const categories = useSelector(
    (state: ProductState) => state.categories
  )

  const routes = categories.map((c: Category) => {
    return (
      <Route key={c.id} path={`/${c.name}`}>
        <h2>{c.name}</h2>
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
