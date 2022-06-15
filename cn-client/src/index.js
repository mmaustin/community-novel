import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
//import { fetchAuthors } from './features/authors/authorSlice';
//import { fetchWorks } from './features/works/workSlice';

const container = document.getElementById('root');
const root = createRoot(container);

//store.dispatch(fetchAuthors());
//store.dispatch(fetchWorks());

root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  //</React.StrictMode>
);

