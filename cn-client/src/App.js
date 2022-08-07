import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './app/Navbar';
import { Homepage } from './features/Homepage';
import { AuthorsList } from './features/authors/AuthorsList';
import { AddAuthorForm }  from './features/authors/AddAuthorForm';
import { SingleAuthorPage } from './features/authors/SingleAuthorPage';
import { UpdateAuthor } from './features/authors/UpdateAuthor';
import { WorksList } from './features/works/WorksList';
import { SingleWorkPage } from './features/works/SingleWorkPage';
import { ContributionsList } from './features/contributions/ContributionsList';
import { SingleContribution } from './features/contributions/SingleContribution';

//import { NodeHomepage } from './features/NodeHomepage';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={< Homepage />} />      
          <Route exact path='/all-authors' element={< AuthorsList />} />
          <Route exact path='/all-works' element={< WorksList />} />
          <Route exact path='/add-author' element={< AddAuthorForm />} />
          <Route exact path='/get-author/:authorId' element={<SingleAuthorPage />} />
          <Route exact path='/update-author/:authorId' element={<UpdateAuthor />} />
          <Route exact path='/get-work/:workId' element={<SingleWorkPage />} />
          <Route exact path='/all-contributions' element={< ContributionsList />} />
          <Route exact path='/get-contribution/:contributionId' element={< SingleContribution />} />       
        </Routes>
    </Router>
  );
}

export default App;
