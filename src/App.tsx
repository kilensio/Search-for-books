import React from 'react';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <BooksPage />
    </>
  )
}

export default App;
