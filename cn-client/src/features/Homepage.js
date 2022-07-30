import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors } from './authors/authorSlice';
import { fetchWorks } from './works/workSlice';
import { fetchContributions } from './contributions/contributionSlice';

export const Homepage = () => {

    const dispatch = useDispatch();
    const authorsStatus = useSelector(state => state.authors.status);
    const worksStatus = useSelector(state => state.works.status);
    const contributionsStatus = useSelector(state => state.contributions.status);
    const [authorDisplayed, setAuthorDisplayed] = useState('');

    useEffect(() => {
        if (authorsStatus === 'idle' && worksStatus === 'idle' && contributionsStatus === 'idle'){
            dispatch(fetchAuthors());
            dispatch(fetchWorks());
            dispatch(fetchContributions());
        }
    }, [authorsStatus, worksStatus, contributionsStatus, dispatch])
    
    return(
        <div className='homepage-container'>
            <p className='homepage-p'>What's the logic for this here homepage</p>
        </div>
    )
}
