import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { allAuthors} from './authorSlice';
import { AuthorWorks } from './AuthorWorks';
import { authorsToLowerCase } from './authorSlice';
//import { AuthorContributions } from './AuthorContributions';

import { Link } from 'react-router-dom';

export const AuthorsList = () => {

    const dispatch = useDispatch();

    const authors = useSelector(allAuthors);

    const lowerAuthors = () => {
        dispatch(authorsToLowerCase(authors));
    }
    lowerAuthors();


    const content = authors.map((author, i) => {
        return <div key={i}>
            <p>{author.name}</p>
            <AuthorWorks works={author.works}/>
            {/*<AuthorContributions contributions={author.contributions}/>*/}
            <Link to={`/get-author/${author.id}`} className="author-link">Single Author</Link>
        </div>
    })

    return(
        <>
            {content}
            <Link to={'/all-works'}>All The Works!</Link>
        </>
    )
}