import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createWork } from '../works/workSlice';

export const CreateAuthorsWork = ({author}) => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [contributions, setContributions] = useState(0);
    const [addRequestStatus, setAddRequestStatus] = useState('idle')    

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onGenreChanged = (e) => setGenre(e.target.value);
    const onContributionsChanged = (e) => setContributions(e.target.value);
    
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
        <section>
            <h2>Add a Work</h2>
            <form>
            <label htmlFor="title">Work Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="genre">Genre:</label>
            <input
                type="text"
                id="genre"
                name="genre"
                value={genre}
                onChange={onGenreChanged}
            />
            <label htmlFor="contributions">Contributions:</label>
            <input
                type="number"
                id="contributions"
                name="contributions"
                value={contributions}
                onChange={onContributionsChanged}
            />            
            <button type="button" onClick={onSaveWorkClicked} disabled={!canSave}>
                Create Work
            </button>
            </form>
      </section>
    )
}