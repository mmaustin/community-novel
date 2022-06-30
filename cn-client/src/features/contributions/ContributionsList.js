import React from 'react';
import { useSelector } from 'react-redux';
import { allContributions } from './contributionSlice';

export const ContributionsList = () => {

    const contributions = useSelector(allContributions);

    const contributionsList = contributions.map((cont, i) => {
        return <p key={i}>{cont.text}</p>
    })

    return(
        <div>
            {contributionsList}
        </div>
    )
}