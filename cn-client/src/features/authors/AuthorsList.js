import React from 'react';
import {useSelector} from 'react-redux';
import { allAuthors} from './authorSlice';
import { AuthorWorks } from './AuthorWorks';

//import { AuthorContributions } from './AuthorContributions';

import { Link } from 'react-router-dom';

export const AuthorsList = () => {

    const authors = useSelector(allAuthors);
    const orderedAuthors = authors.slice().sort((a,b) => a.name.localeCompare(b.name))

    const content = orderedAuthors.map((author, i) => {
        return <div className='author-list-segment' key={i}>
            <p className='author-list-name'>{author.name}</p>
            <AuthorWorks works={author.works}/>
            {/*<AuthorContributions contributions={author.contributions}/>*/}
            <Link to={`/get-author/${author.id}`} className="all-links">Single Author</Link>
        </div>
    })

    return(
        <>
            <div id='author-list-container'>
                {content}
                <div className='bottom-external-links'>
                    <p className='bottom-links'><Link className='all-links' to={'/all-works'}>All The Works!</Link></p>
                    <p className='bottom-links'><Link className='all-links' to={'/add-author'}>Create Your Author Profile</Link></p>
                </div>
            </div>
        </>
    )
}