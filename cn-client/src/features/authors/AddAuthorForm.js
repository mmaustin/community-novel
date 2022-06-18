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
            await dispatch(createAuthor({ name, statement })).unwrap()
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
        <>
        </>
    )
}
