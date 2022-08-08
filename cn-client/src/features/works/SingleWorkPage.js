import React from 'react'
import { useSelector} from 'react-redux'
import { useParams} from 'react-router-dom';
import { getWorkById } from './workSlice';
import { AddContribution } from '../contributions/AddContribution';
//import { fetchContributions } from '../contributions/contributionSlice';

export const SingleWorkPage = () => {

    //const dispatch = useDispatch();

    const params = useParams();
    const workId = parseInt(params.workId);

    const work = useSelector(state => getWorkById(state, workId));
    const contribs = useSelector(state => state.contributions.contributions);
    //const contribsStatus = useSelector(state => state.contributions.status);
    const workContribs = contribs.filter(c => c.work_id === work.id);
    const authors = useSelector(state => state.authors.authors)

    /*useEffect(() => {
        if (contribsStatus === 'idle') {
            dispatch(fetchContributions());
        }
    }, [contribsStatus, dispatch])

    if (contribsStatus === 'succeeded'){
        console.log(workContribs);
    }*/

    let contributionsDisplay;
    let contributionAuthor;


    if (workContribs && workContribs.length > 0) {
        contributionsDisplay = workContribs.map((con, i) => {
            contributionAuthor = authors.find(author => author.id === con.author_id)
        return <div className='work-contribution-container' key={i}>            
            <p className='contribution-text'>{i+1}) {con.text}</p>
            <p className='contribution-author'>{contributionAuthor.name}</p>                     
        </div>
        })
    }

    return(
        <>
            <div className='work-container'>
                <div className='work-headers'>
                    <p className='work-title'>TITLE: {work ? <>{work.title}</> : <>Nope!</>}</p>
                    <p className='work-genre'>GENRE: {work.genre}</p>
                </div>
                <div className='contributions-container'>
                    {contributionsDisplay}
                </div>
                { workContribs.length < work.contribution_number &&
                    < AddContribution work={work} authors={authors} />
                }
            </div>      
        </>
    )
}