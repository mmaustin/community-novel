import React from 'react'
import { useSelector} from 'react-redux'
import { useParams, Link} from 'react-router-dom';
import { getAuthorById } from './authorSlice';

export const SingleAuthorPage = () => {

    const params = useParams();
    const authorId = parseInt(params.authorId);

    const author = useSelector(state => getAuthorById(state, authorId));

    return(
        <>
            {author ? <p>{author.name}</p> : <p>Nope!</p>}
            {author ? <Link to={`/update-author/${author.id}`} >Edit Author</Link> : <p></p>}            
        </>
    )
}