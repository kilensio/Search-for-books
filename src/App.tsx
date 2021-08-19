import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Details from './components/Details';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import NotFound from './pages/NotFound';

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
            <Route path={'/:id'} exact>
              <Details />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App;
