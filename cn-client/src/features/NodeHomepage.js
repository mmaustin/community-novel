import React, {useState, useEffect} from 'react';

export const NodeHomepage = () => {

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://localhost:3001/api/v1/auth')
        }
    }, [])


    return(
        <>
        </>
    )
}

