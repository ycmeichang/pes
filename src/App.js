import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BreedList from './pages/BreedList'
import BreedDetail from './pages/BreedDetail'
import { Routes } from './routes'
import GlobalStyles from './globalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path={Routes.breedDetail} component={BreedDetail} />
          <Route path={Routes.root} component={BreedList} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
