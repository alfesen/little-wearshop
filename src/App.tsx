import { useEffect, lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { State, Category } from './types/Types'
import { currencyActions } from './store/currency-slice'
import MainLayout from './components/views/MainLayout/MainLayout'
import NotFound from './components/views/NotFound/NotFound'
// import Home from './components/pages/Home/Home'

function App() {
  const categories = useSelector((state: State) => state.products.categories)
  const dispatch = useDispatch()

  const Home = lazy(() => import('./components/pages/Home/Home'))
  const ProductList = lazy(
    () => import('./components/views/ProductList/ProductList')
  )
  const ProductPage = lazy(
    () => import('./components/pages/ProductPage/ProductPage')
  )
  // const NotFound = lazy(() => import('./components/views/NotFound/NotFound'))
  const CheckoutPage = lazy(
    () => import('./components/pages/CheckoutPage/CheckoutPage')
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

  const categoryRoutes = categories.map((c: Category) => {
    return {
      path: `/${c.name}`,
      element: <ProductList key={`${c.id}_category_key`} category={c} />,
    }
  })

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        ...categoryRoutes,
        {path: '*', element: <NotFound/>},
        {path: '/', element: <Navigate to='/home' />},
        { path: '/home', element: <Home /> },
        { path: '/product/:id', element: <ProductPage /> },
        { path: '/checkout', element: <CheckoutPage /> },
      ],
    },
  ])

  return (
    <div className='App'>
      <Suspense>
      <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
