import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import { createContribution} from './contributionSlice';

export const AddContribution = ({work, authors}) => {

    //console.log(authors[0].name);

    const [text, setText] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    const dispatch = useDispatch();
    
    const onTextChanged = (e) => setText(e.target.value);
    const onSelectAuthorId = (e) => setAuthorId(e.target.value);

    const selectAuthor = authors.map((author, i)=>{
      return <option key={i} value={author.id}>{author.name}</option>
    })

    console.log(authorId)

    const canSave =
    [text, authorId].every(Boolean) && addRequestStatus === 'idle'

    const saveContribution = async () => {
        if (canSave) {
          try {
            setAddRequestStatus('pending')
            await dispatch(createContribution({contribution: { text, author_id: authorId, work_id: work.id }})).unwrap()
            setText('');
          } catch (err) {
            console.error('Failed to save the contribution: ', err)
          } finally {
            setAddRequestStatus('idle');
            setAuthorId('');
          }
        }
        //navigate(`/`);        
      }

    return(
        <section className='add-contribution-container'>
            <h2 className='contribution-header'>Add A Contribution Below</h2>
            <form className='contribution-form'>
              <label htmlFor="contribution"></label>
              <textarea
                  id="contribution"
                  name="contribution"
                  value={text}
                  onChange={onTextChanged}
              ></textarea>
              <select className='select-author' value={authorId} onChange={onSelectAuthorId}>
                <option value=""></option>
                {selectAuthor}
              </select>
              <button className='contribution-button' type="button" onClick={saveContribution} disabled={!canSave}>
                  Save Contribution
              </button>
            </form>
      </section>
    )
}