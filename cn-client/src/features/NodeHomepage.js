import React, {useState, useEffect} from 'react';

export const NodeHomepage = () => {

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://localhost:5001/api/v1/products')
            console.log(data);
        }
        fetchData();
    }, [])


    return(
        <>
        </>
    )
}

