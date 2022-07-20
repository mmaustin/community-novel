import React from 'react';
import { useSelector } from 'react-redux';
import { allContributions } from './contributionSlice';

export const ContributionsList = () => {

    const contributions = useSelector(allContributions);

    const contributionsList = contributions.map((cont, i) => {
        console.log(cont);
        return <div key={i}>
            <p>{cont.text}</p>
        </div>
})

    return(
        <div>
            {contributionsList}
        </div>
    )
}