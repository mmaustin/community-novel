import React from 'react';
import { useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
import { allWorks } from './workSlice';

export const WorksList = () => {

    const worksFromStore = useSelector(allWorks);
    const theWorks = worksFromStore.map((work, i) => {
        return <div key={i}>
                <p>{work.title}</p>
        </div>
    })

    return(
        <>
            {theWorks}
        </>
    )
}