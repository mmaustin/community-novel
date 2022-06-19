import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { createAuthor} from './authorSlice';

export const AddAuthorForm = () => {

    const [name, setName] = useState('');
    const [statement, setStatement] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    const dispatch = useDispatch();

    const onNameChanged = (e) => setName(e.target.value);
    const onStatementChanged = (e) => setStatement(e.target.value);

    const canSave =
    [name, statement].every(Boolean) && addRequestStatus === 'idle'

    const onSaveAuthorClicked = async () => {
        if (canSave) {
          try {
            setAddRequestStatus('pending')
            await dispatch(createAuthor({author: { name, statement }})).unwrap()
            setName('');
            setStatement('');
          } catch (err) {
            console.error('Failed to save the post: ', err)
          } finally {
            setAddRequestStatus('idle')
          }
        }
      }

    return(
        <section>
            <h2>Add an Author</h2>
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
            <button type="button" onClick={onSaveAuthorClicked} disabled={!canSave}>
                Save Author
            </button>
            </form>
      </section>
    )
}