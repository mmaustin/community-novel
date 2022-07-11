import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate, useParams} from 'react-router-dom'
import { getAuthorById } from './authorSlice';
import { updateAuthor } from './authorSlice';

export const UpdateAuthor = () => {

    const params = useParams();
    const authorId = parseInt(params.authorId);

    const author = useSelector(state => getAuthorById(state, authorId));    

    const [name, setName] = useState(author.name);
    const [statement, setStatement] = useState(author.statement);
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    const dispatch = useDispatch();
    let navigate = useNavigate();    

    const onNameChanged = (e) => setName(e.target.value);
    const onStatementChanged = (e) => setStatement(e.target.value);

    const canSave =
    [name, statement].every(Boolean) && addRequestStatus === 'idle'

    const onUpdateAuthorClicked = async () => {
        if (canSave) {
          try {
            setAddRequestStatus('pending')
            await dispatch(updateAuthor({id: author.id, author: { name, statement }})).unwrap()
            setName('');
            setStatement('');
          } catch (err) {
            console.error('Failed to save the post: ', err)
          } finally {
            setAddRequestStatus('idle')
          }
        }
        navigate(`/get-author/${author.id}`);     
      }

    return(
        <section>
            <h2>Update Author Information</h2>
            <form>
            <label htmlFor="authorName">Author Name:</label>
            <input
                type="text"
                id="player-name"
                name="playerName"
                value={name}
                onChange={onNameChanged}
            />
            <label htmlFor="statement">Statement:</label>
            <input
                type="text"
                id="author-statement"
                name="statement"
                value={statement}
                onChange={onStatementChanged}
            />
            <button type="button" onClick={onUpdateAuthorClicked} disabled={!canSave}>
                Update Author
            </button>
            </form>
      </section>
    )
}