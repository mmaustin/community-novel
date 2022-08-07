import React, {useEffect} from 'react';

export const NodeHomepage = () => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5001/api/v1/products', {
                mode: 'no-cors',
                headers: {
                //'Access-Control-Allow-Origin':'*',
                }
            })
            //if (!response.ok) {
                //throw new Error(`HTTP error: ${response.status}`);
                //console.log('true')
            //}    
            //const data = await d.json();
            console.log(response);
        }
        fetchData();
    }, [])


    return(
        <>
            <p>Sure would be nice if this thing actually works!</p>
        </>
    )
}

