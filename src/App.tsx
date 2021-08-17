import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Books from './components/Books';
import Details from './components/Details';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
// import BooksPage from './pages/BooksPage';
// import DetailsPage from './pages/DetailsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <div className="container">
          <Switch>
            <Route path={'/'} exact>
              <Books />
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
