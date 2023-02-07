import { Outlet } from 'react-router-dom'
import HomeButton from '../../controllers/HomeButton/HomeButton'
import NavBar from '../Navigation/NavBar'

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <HomeButton />
      <section className={`container`}>
        <Outlet />
        {/* <Switch>
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
              <CheckoutPage />
            </Route>
            <Route path='*' exact={true}>
              <NotFound />
            </Route>
          </Switch>
        </Suspense> */}
      </section>
    </>
  )
}

export default MainLayout
