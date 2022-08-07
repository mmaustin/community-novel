import React, {useEffect} from 'react';

export const NodeHomepage = () => {

    useEffect(() => {
        const fetchData = async () => {
            const d = await fetch('http://localhost:5001/api/v1/products', {
                mode: 'no-cors',
                headers: {
                //'Access-Control-Allow-Origin':'*',
                }
            })
            const data = await d.json();
            console.log(data);
        }
        fetchData();
    }, [])


    return(
        <>
            <p>Sure would be nice if this thing actually works!</p>
        </>
    )
}

