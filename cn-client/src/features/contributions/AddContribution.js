import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createContribution} from './contributionSlice';

export const AddContribution = ({work}) => {

    const [text, setText] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    const dispatch = useDispatch();
    
    const onTextChanged = (e) => setText(e.target.value);

    const canSave =
    [text].every(Boolean) && addRequestStatus === 'idle'

    const saveContribution = async () => {
        if (canSave) {
          try {
            setAddRequestStatus('pending')
            await dispatch(createContribution({contribution: { text, author_id: work.author_id, work_id: work.id }})).unwrap()
            setText('');
          } catch (err) {
            console.error('Failed to save the contribution: ', err)
          } finally {
            setAddRequestStatus('idle')
          }
        }
      }

    return(
        <>
            <p>{work.author_id} and {work.id}</p>
        </>
    )
}