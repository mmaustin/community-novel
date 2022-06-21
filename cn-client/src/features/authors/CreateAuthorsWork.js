import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createWork } from '../works/workSlice';

export const CreateAuthorsWork = ({author}) => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [contributions, setContributions] = useState(0);
    const [addRequestStatus, setAddRequestStatus] = useState('idle')    

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeGenre = (e) => setGenre(e.target.value);
    const onChangeContributions = (e) => setContributions(e.target.value);
    
    const canSave =
    [title, genre, contributions].every(Boolean) && addRequestStatus === 'idle'
    
    const onSaveWorkClicked = async () => {
        if (canSave) {
          try {
            setAddRequestStatus('pending')
            await dispatch(createWork({work: { title, genre, contribution_number: contributions, author_id: author.id }})).unwrap()
            setTitle('');
            setGenre('');
            setContributions('');
          } catch (err) {
            console.error('Failed to save the post: ', err)
          } finally {
            setAddRequestStatus('idle')
          }
        }
      }    

    return(
        <>
            <p>Author's Work Component</p>
            {author.id}
        </>
    )
}