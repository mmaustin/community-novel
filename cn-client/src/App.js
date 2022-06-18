import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthorsList } from './features/authors/AuthorsList';
import { AddAuthorForm } from './features/authors/AddAuthorForm';
import { SingleAuthorPage } from './features/authors/SingleAuthorPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={< AuthorsList />} />
      <Route exact path='/add-author' element={< AddAuthorForm />} />
      <Route exact path='/get-author/:authorId' element={<SingleAuthorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
