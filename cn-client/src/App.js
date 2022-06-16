import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthorsList } from './features/authors/AuthorsList';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={< AuthorsList />} />
      </Routes>
    </Router>
  );
}

export default App;
