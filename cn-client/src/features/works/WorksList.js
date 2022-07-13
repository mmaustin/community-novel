import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allWorks } from './workSlice';

export const WorksList = () => {

    const worksFromStore = useSelector(allWorks);
    const theWorks = worksFromStore.map((work, i) => {
        return <div className='work-list-segment' key={i}>
                <p className='work-title' >{work.title}</p>
                <p>{work.contribution_number}</p>
                <Link to={`/get-work/${work.id}`} className="all-links">Read Me!</Link>                
        </div>
    })

    return(
        <>
            <div id='works-container'>
                {theWorks}
            </div>
        </>
    )
}