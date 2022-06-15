import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchAuthors } from './features/authors/authorSlice';
//import { fetchWorks } from './features/works/workSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthors())
  }, [dispatch])

  return (
    <>
      <p>What's up, Doc!</p>
    </>
  );
}

export default App;
