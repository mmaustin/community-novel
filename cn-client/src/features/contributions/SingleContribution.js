import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getContributionById } from './contributionSlice';

export const SingleContribution = () => {

    const params = useParams();
    const contributionId = parseInt(params.contributionId);

    const contribution = useSelector(state => getContributionById(state, contributionId));
    console.log(contribution);   


    return(
        <>
            <p>Papa don't take no mess!</p>
        </>
    )
}
