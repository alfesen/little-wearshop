import { useEffect, lazy , Suspense} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { State, Category } from './types/Types'
import { currencyActions } from './store/currency-slice'
import NavBar from './components/Layout/Navigation/NavBar'
import Overlay from './components/UI/Overlay/Overlay'

function App() {
  const categories = useSelector((state: State) => state.products.categories)
  const backdrop = useSelector((state: State) => state.currencies.show)
  const dispatch = useDispatch()

  const Home = lazy(() => import('./components/Home/Home'))
  const ProductList = lazy(() => import('./components/Features/ProductList'))

  useEffect(() => {
    const requestURL =
      'https://api.exchangerate.host/latest?base=USD&symbols=EUR,GBP,RUB,JPY'
    const req = new XMLHttpRequest()
    req.open('GET', requestURL)
    req.responseType = 'json'
    req.send()
    req.onload = () => {
      const res = req.response
      const rates: any[] = []
      for (const rate in res.rates) {
        rates.push(rate)
      }
      dispatch(
        currencyActions.setCurrencies({ rates: res.rates, currencies: rates })
      )
      
    }
  }, [dispatch])

  const closeBackdrop = () => {
    dispatch(currencyActions.toggleCurrencySelect())
  }

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
      {backdrop && <Overlay onClose={closeBackdrop} />}
      <section className='container'>
        <Suspense >

        <Switch>
          <Route exact path='/'><Redirect to='/home' /></Route>
          <Route path='/home'><Home /></Route>
          {routes}
          </Switch>
        </Suspense>
      </section>
    </div>
  )
}

export default App
