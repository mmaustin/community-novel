import React from 'react';
import {useSelector} from 'react-redux';
import { allAuthors} from './authorSlice';
import { AuthorWorks } from './AuthorWorks';

//import { AuthorContributions } from './AuthorContributions';

import { Link } from 'react-router-dom';

export const AuthorsList = () => {

    const authors = useSelector(allAuthors);
    const lowercaseAuthors = authors.slice().sort((a,b) => b.name.localeCompare(a.name))

    const changeTextColor = (e) => {
        if(e.target.style.color !== 'red'){
            e.target.style.color = 'red';
        } else {
            e.target.style.color = 'blue';
        }
    }

    const content = lowercaseAuthors.map((author, i) => {
        return <div key={i}>
            <p onClick={changeTextColor}>{author.name}</p>
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