import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthorsList } from './features/authors/AuthorsList';
import { AddAuthorForm } from './features/authors/AddAuthorForm';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={< AuthorsList />} />
      <Route exact path='/add-author' element={< AddAuthorForm />} />
      </Routes>
    </Router>
  );
}

export default App;
