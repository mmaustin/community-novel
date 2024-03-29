import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useParams, Link, useNavigate} from 'react-router-dom';
import { getAuthorById } from './authorSlice';
import { deleteAuthor } from './authorSlice';
import { CreateAuthorsWork } from './CreateAuthorsWork';

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
        <div id='author-page-container'>
            <div id='author-container'>
                <h3 id='single-author-name'>Welcome {author.name}!</h3>
                <p><Link className='all-links' to={`/update-author/${author.id}`} >Edit Your Profile</Link></p>
                {/*{author ? <p id='single-author-name'>{author.name}</p> : <p>Nope!</p>}
                {author ? <Link className='all-links' to={`/update-author/${author.id}`} >Edit Author</Link> : <p></p>}*/}
                <p><button onClick={deleteThisAuthor}>Delete Your Profile</button></p>                 
            </div>
            < CreateAuthorsWork author={author}/>        
        </div>
    )
}