import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors } from './authors/authorSlice';
import { fetchWorks } from './works/workSlice';
import { fetchContributions } from './contributions/contributionSlice';

export const Homepage = () => {

    const dispatch = useDispatch();
    const authorsStatus = useSelector(state => state.authors.status);
    const worksStatus = useSelector(state => state.works.status);
    const contributionsStatus = useSelector(state => state.contributions.status);

    useEffect(() => {
        if (authorsStatus === 'idle' && worksStatus === 'idle' && contributionsStatus === 'idle'){
            dispatch(fetchAuthors());
            dispatch(fetchWorks());
            dispatch(fetchContributions());
        }
    }, [authorsStatus, worksStatus, contributionsStatus, dispatch])
    
    return(
        <>
            <p>What's the logic for this here homepage</p>
        </>
    )
}
