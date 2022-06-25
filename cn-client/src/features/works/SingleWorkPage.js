import React from 'react'
import { useSelector} from 'react-redux'
import { useParams} from 'react-router-dom';
import { getWorkById } from './workSlice';
import { AddContribution } from '../contributions/AddContribution';

export const SingleWorkPage = () => {

    const params = useParams();
    const workId = parseInt(params.workId);

    const work = useSelector(state => getWorkById(state, workId));

    let contributionsDisplay;

    if (work.contributions.length > 0) {
        contributionsDisplay = work.contributions.map((con, i) => {
        return <div key={i}>
            <p>{con.text}</p>
        </div>
        })
    }

    return(
        <>
            {work ? <p>{work.genre}</p> : <p>Nope!</p>}
            {contributionsDisplay}
            < AddContribution work={work} />    
        </>
    )
}