import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getContributionById } from './contributionSlice';

export const SingleContribution = () => {

    const params = useParams();
    const contributionId = parseInt(params.contributionId);

    const foundContribution = useSelector(state => getContributionById(state, contributionId));
    
    const contribution = foundContribution.text


    return(
        <>
            <p>{contribution}</p>
        </>
    )
}
