import React, {useEffect} from 'react';


const App = () => {

  useEffect(() => {
    fetch("http://localhost:3000/authors").then((res) => {
        res.json().then((data) => {
          console.log(data)
        });
    });
  }, []);

  return (
    <>
      <p>What's up, Doc!</p>
    </>
  );
}

export default App;
