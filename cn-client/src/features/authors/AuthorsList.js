import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { allAuthors} from './authorSlice';
import { fetchAuthors } from './authorSlice';
import { fetchWorks } from '../works/workSlice';
import { AuthorWorks } from './AuthorWorks';
//import { AuthorContributions } from './AuthorContributions';
import { Link } from 'react-router-dom';

export const AuthorsList = () => {

    const dispatch = useDispatch();
    const authors = useSelector(allAuthors);
    const authorsStatus = useSelector(state => state.authors.status);
    const worksStatus = useSelector(state => state.works.status);

    useEffect(() => {
        if (authorsStatus === 'idle' && worksStatus === 'idle'){
            dispatch(fetchAuthors());
            dispatch(fetchWorks());
        }
    }, [authorsStatus, worksStatus, dispatch])

    let content;

    if (authorsStatus === 'succeeded'){
        content = authors.map((author, i) => {
            return <div key={i}>
                <p>{author.name}</p>
                <AuthorWorks works={author.works}/>
                {/*<AuthorContributions contributions={author.contributions}/>*/}
                <Link to={`/get-author/${author.id}`} className="author-link">Single Author</Link>
            </div>
        })
    }

    return(
        <>
            {content}
            <Link to={'/all-works'}>All The Works!</Link>
        </>
    )
}