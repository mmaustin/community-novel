import React from 'react';
import { useSelector } from 'react-redux';
import { allContributions } from './contributionSlice';

export const ContributionsList = () => {

    const contributions = useSelector(allContributions);
    const authors = useSelector(state => state.authors.authors)

    let contributionAuthor;

    const contributionsList = contributions.map((cont, i) => {
        contributionAuthor = authors.find(author => author.id === cont.author_id)
        return <div key={i}>
            <p>{cont.text}</p>
            <p>{contributionAuthor.name}</p>
        </div>
})

    return(
        <div>
            {contributionsList}
        </div>
    )
}