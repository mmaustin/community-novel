import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors } from './authors/authorSlice';
import { fetchWorks } from './works/workSlice';
import { fetchContributions } from './contributions/contributionSlice';
import { allAuthors } from './authors/authorSlice';

export const Homepage = () => {

    const dispatch = useDispatch();
    const authors = useSelector(allAuthors);
    const authorsStatus = useSelector(state => state.authors.status);
    const worksStatus = useSelector(state => state.works.status);
    const contributionsStatus = useSelector(state => state.contributions.status);
    //const [authorDisplayed, setAuthorDisplayed] = useState('');

    useEffect(() => {
        if (authorsStatus === 'idle' && worksStatus === 'idle' && contributionsStatus === 'idle'){
            dispatch(fetchAuthors());
            dispatch(fetchWorks());
            dispatch(fetchContributions());
        }
    }, [authorsStatus, worksStatus, contributionsStatus, dispatch])

    let authorsCollection;

    if(authorsStatus === 'succeeded'){
        authorsCollection = authors.map((author, i) => {
            return <div className='homepage-author-container' key={i}>
                    <p className='welcome-author'>{author.name}</p>
            </div>
        })
    }

/*    let a;
    const changeAuthorDisplayed = () => {
        if(authors.length > 0){
            a = authors[Math.floor(Math.random() * authors.length)].name
            return a
        }
    }

    useEffect(()=>{
        setInterval(()=> setAuthorDisplayed(changeAuthorDisplayed), 5000);
    })
*/
 
    return(
        <div className='homepage-container'>
            <h3>Welcome Authors!</h3>
            <div className='authors-collection-container'>{authorsCollection}</div>
            {/*<p>{authorDisplayed}</p>*/}
        </div>
    )
}
