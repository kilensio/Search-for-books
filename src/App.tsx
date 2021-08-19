import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Details from './components/Details';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <div className="container">
          <Switch>
            <Route path={'/'} exact>
              <BooksPage />
            </Route>
            <Route path={'/book/:id'} exact>
              <Details />
            </Route>
            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App;
