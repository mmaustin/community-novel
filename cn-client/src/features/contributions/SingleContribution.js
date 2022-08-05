import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getContributionById } from './contributionSlice';

export const SingleContribution = () => {

    const params = useParams();
    const contributionId = parseInt(params.contributionId);

    const foundContribution = useSelector(state => getContributionById(state, contributionId));
    
    //const contribution = foundContribution.text
    let contribution;
    
    try {
        if(foundContribution){
            contribution = foundContribution.text 
        }
    } catch (error) {
        console.log(error);
    }


    return(
        <>
            <p>{contribution}</p>
        </>
    )
}
