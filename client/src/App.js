import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { useUserContext } from './context/user_context'
import {
  AboutPage,
  CartPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
  Condition,
  Login,
  Register,
  Success,
} from './pages/index'

function App() {
  const { currentUser } = useUserContext()

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/about'>
          <AboutPage />
        </Route>
        <Route exact path='/products'>
          <ProductsPage />
        </Route>
        <Route
          exact
          path='/products/:_id'
          children={<SingleProductPage />}
        ></Route>
        <Route exact path='/success'>
          <Success />
        </Route>
        <Route exact path='/condition'>
          <Condition />
        </Route>
        <Route exact path='/cart'>
          <CartPage />
        </Route>
        <Route exact path='/login'>
          {currentUser ? <Redirect to='/' /> : <Login />}
        </Route>
        <Route path='/register'>
          {currentUser ? <Redirect to='/' /> : <Register />}
        </Route>

        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
