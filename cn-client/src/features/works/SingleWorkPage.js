import React from 'react'
import { useSelector} from 'react-redux'
import { useParams} from 'react-router-dom';
import { getWorkById } from './workSlice';

export const SingleWorkPage = () => {

    const params = useParams();
    const workId = parseInt(params.workId);

    const work = useSelector(state => getWorkById(state, workId));

/*    const deleteThisAuthor = () => {
        dispatch(deleteAuthor({id: author.id}));
        navigate('/');
    }
*/
    return(
        <>
            {work ? <p>{work.genre}</p> : <p>Nope!</p>}       
        </>
    )
}