import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { allAuthors} from './authorSlice';
import { fetchAuthors } from './authorSlice';

export const AuthorsList = () => {

    const dispatch = useDispatch();
    const authors = useSelector(allAuthors);
    const authorsStatus = useSelector(state => state.authors.status);
    
    useEffect(() => {
        if (authorsStatus === 'idle'){
            dispatch(fetchAuthors());
        }
    }, [authorsStatus, dispatch])

    let content;

    if (authorsStatus === 'succeeded'){
        content = authors.map((author, i) => {
            return <div key={i}><p>{author.name}</p></div>
        })
    }

    return(
        <>
            {content}
        </>
    )
}