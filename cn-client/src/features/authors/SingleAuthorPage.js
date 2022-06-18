import React from 'react'
import { useSelector} from 'react-redux'
import { useParams} from 'react-router-dom';
import { getAuthorById } from './authorSlice';

export const SingleAuthorPage = () => {

    const params = useParams();
    const authorId = parseInt(params.authorId);

    const author = useSelector(state => getAuthorById(state, authorId));

    return(
        <>
            {author ? <p>{author.name}</p> : <p>Nope!</p>}
        </>
    )
}