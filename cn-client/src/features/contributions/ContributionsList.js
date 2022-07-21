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
        return <div className='contribution-list-container' key={i}>
            <p className='contribution-text'>{cont.text}</p>
            <p className='contribution-author'>{contributionAuthor.name}</p>
            <p className='contribution-work'>{contributionWork.title}</p>
        </div>
})

    return(
        <div className='contributions-list-container'>
            {contributionsList}
        </div>
    )
}