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
    const workContribs = contribs.filter(c => c.work_id === work.id);

    useEffect(() => {
        if (contribsStatus === 'idle') {
            dispatch(fetchContributions());
        }
    }, [contribsStatus, dispatch])

    if (contribsStatus === 'succeeded'){
        console.log(workContribs);
    }

    let contributionsDisplay;

    if (workContribs && workContribs.length > 0) {
        contributionsDisplay = workContribs.map((con, i) => {
        return <div key={i}>
            <p>{con.text}</p>            
            <p>{i+1}</p>
        </div>
        })
    }

    return(
        <>
            <div>
                <div>
                    <p>{work ? <>{work.title}</> : <>Nope!</>}</p>
                    <p>{work.genre}</p>
                </div>
                <div>
                    {contributionsDisplay}
                </div>
                <div>{ workContribs.length < work.contribution_number &&
                    < AddContribution work={work} />
                }</div>
            </div>      
        </>
    )
}