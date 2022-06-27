import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useParams} from 'react-router-dom';
import { getWorkById } from './workSlice';
import { AddContribution } from '../contributions/AddContribution';
import { fetchContributions } from '../contributions/contributionSlice';

export const SingleWorkPage = () => {

    const dispatch = useDispatch();

    const params = useParams();
    const workId = parseInt(params.workId);

    const work = useSelector(state => getWorkById(state, workId));
    const contribs = useSelector(state => state.contributions.contributions);
    const contribsStatus = useSelector(state => state.contributions.status);

    useEffect(() => {
        if (contribsStatus === 'idle') {
            dispatch(fetchContributions());
        }
    }, [contribsStatus, dispatch])

    if (contribsStatus === 'succeeded'){
        console.log(contribs);
    }

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
            { work.contributions.length < work.contribution_number &&
                < AddContribution work={work} />
            }
        </>
    )
}