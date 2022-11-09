import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { currencyActions } from './store/currency-slice'
import NavBar from './components/Layout/Navigation/NavBar'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from './types/Types'
import { Category } from './types/Types'
import ProductList from './components/Features/ProductList'

function App() {
  const categories = useSelector((state: State) => state.products.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    const requestURL =
      'https://api.exchangerate.host/latest?base=USD&symbols=EUR,GBP,RUB,JPY'
    const req = new XMLHttpRequest()
    req.open('GET', requestURL)
    req.responseType = 'json'
    req.send()

    req.onload = () => {
      const res = req.response
      dispatch(currencyActions.setCurrencies(res.rates))
    }
  }, [dispatch])

  const routes = categories.map((c: Category) => {
    return (
      <Route key={c.id} path={`/${c.name}`}>
        <ProductList key={`${c.id}_category_key`} category={c} />
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
