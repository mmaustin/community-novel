import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthorsList } from './features/authors/AuthorsList';
import { AddAuthorForm } from './features/authors/AddAuthorForm';
import { SingleAuthorPage } from './features/authors/SingleAuthorPage';
import { UpdateAuthor } from './features/authors/UpdateAuthor';
import { WorksList } from './features/works/WorksList';
import { SingleWorkPage } from './features/works/SingleWorkPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={< AuthorsList />} />
      <Route exact path='/all-works' element={< WorksList />} />
      <Route exact path='/add-author' element={< AddAuthorForm />} />
      <Route exact path='/get-author/:authorId' element={<SingleAuthorPage />} />
      <Route exact path='/update-author/:authorId' element={<UpdateAuthor />} />
      <Route exact path='/get-work/:workId' element={<SingleWorkPage />} />           
      </Routes>
    </Router>
  );
}

export default App;
