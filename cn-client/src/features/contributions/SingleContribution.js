import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getContributionById } from './contributionSlice';

export const SingleContribution = () => {

    const params = useParams();
    const contributionId = parseInt(params.contributionId);

    const foundContribution = useSelector(state => getContributionById(state, contributionId));
    
    //const contribution = foundContribution.text
    let contribution = 'Something went wrong! Access the homepage via the Menu button above.';
    
    try {
        if(foundContribution){
            contribution = foundContribution.text 
        }
    } catch(error)  {
        console.log(error);
    }

    return(
        <div className='single-contribution-container'>
            <p className='contribution-text'>{contribution}</p>
        </div>
    )
}
