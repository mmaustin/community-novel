import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAuthor} from './authorSlice';

export const AddAuthorForm = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [statement, setStatement] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    const dispatch = useDispatch();

    const onNameChanged = (e) => setName(e.target.value);
    const onStatementChanged = (e) => setStatement(e.target.value);

    const canSave =
    [name, statement].every(Boolean) && addRequestStatus === 'idle'

    const onSaveAuthorClicked = async (e) => {
      e.preventDefault();
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
        navigate(`/all-authors`);
      }

    return(
        <section className='add-author-container'>
            <form className='add-author-form'>
              <h2 className='add-author-header'>Add an Author</h2>
              <label htmlFor="author-name">Author Name:</label>
              <input
                  type="text"
                  id="author-name"
                  name="author-name"
                  value={name}
                  onChange={onNameChanged}
              />
              <label htmlFor="author-statement">Statement:</label>
              <textarea
                  id="author-statement"
                  name="statement"
                  value={statement}
                  onChange={onStatementChanged}
              ></textarea>
              <button type="button" onClick={onSaveAuthorClicked} disabled={!canSave}>
                  Save Author
              </button>
            </form>
      </section>
    )
}
