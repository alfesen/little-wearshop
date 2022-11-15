import { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { State, Category } from './types/Types'
import { currencyActions } from './store/currency-slice'
import NavBar from './components/views/Navigation/NavBar'
import HomeButton from './components/controllers/HomeButton/HomeButton'
import ProductPage from './components/pages/ProductPage/ProductPage'
import NotFound from './components/views/NotFound/NotFound'
import Checkout from './components/pages/CheckoutPage/CheckoutPage'

function App() {
  const categories = useSelector((state: State) => state.products.categories)
  const dispatch = useDispatch()

  const Home = lazy(() => import('./components/pages/Home/Home'))
  const ProductList = lazy(
    () => import('./components/views/ProductList/ProductList')
  )

  useEffect(() => {
    const requestURL =
      'https://api.exchangerate.host/latest?base=USD&symbols=EUR,USD,GBP,RUB,JPY,PLN'
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
      <HomeButton />
      <section className={`container`}>
        <Suspense>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            {routes}
            <Route path='/product/:id'>
              <ProductPage />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='*' exact={true}>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </section>
    </div>
  )
}

export default App
