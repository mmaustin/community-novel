import React from 'react';
import { useSelector } from 'react-redux';
import { allContributions } from './contributionSlice';
import { allWorks } from '../works/workSlice';

export const ContributionsList = () => {

    const contributions = useSelector(allContributions);
    const authors = useSelector(state => state.authors.authors)
    const works = useSelector(allWorks);
    

    let contributionAuthor;
    let contributionWork;

    const contributionsList = contributions.map((cont, i) => {
        contributionAuthor = authors.find(author => author.id === cont.author_id);
        contributionWork = works.find(work => work.id === cont.work_id);   
        return <div key={i}>
            <p>{cont.text}</p>
            <p>{contributionAuthor.name}</p>
            <p>{contributionWork.title}</p>
        </div>
})

    return(
        <div>
            {contributionsList}
        </div>
    )
}