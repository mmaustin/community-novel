import React, {useEffect} from 'react';

export const NodeHomepage = () => {

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:5001/api/v1/products', {
                mode: 'no-cors',
                headers: {
                //'Access-Control-Allow-Origin':'*',
                }
            })
            .then((response) => response.json())
            .then((products) => console.log(products));
            
        }
        fetchData();
    }, [])


    return(
        <>
            <p>Sure would be nice if this thing actually works!</p>
        </>
    )
}

