import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useParams, Link, useNavigate} from 'react-router-dom';
import { getAuthorById } from './authorSlice';
import { deleteAuthor } from './authorSlice';

export const SingleAuthorPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const params = useParams();
    const authorId = parseInt(params.authorId);

    const author = useSelector(state => getAuthorById(state, authorId));

    const deleteThisAuthor = () => {
        dispatch(deleteAuthor({id: author.id}));
        navigate('/');
    }

    return(
        <>
            {author ? <p>{author.name}</p> : <p>Nope!</p>}
            {author ? <Link to={`/update-author/${author.id}`} >Edit Author</Link> : <p></p>}            
        </>
    )
}