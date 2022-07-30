import React, {useEffect, useState} from 'react'
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
    const [authorDisplayed, setAuthorDisplayed] = useState('');

    useEffect(() => {
        if (authorsStatus === 'idle' && worksStatus === 'idle' && contributionsStatus === 'idle'){
            dispatch(fetchAuthors());
            dispatch(fetchWorks());
            dispatch(fetchContributions());
        }
    }, [authorsStatus, worksStatus, contributionsStatus, dispatch])

    /*let authorsCollection;

    if(authorsStatus === 'succeeded'){
        authorsCollection = authors.map((author, i) => {
            return <div className='homepage-author-container' key={i}>
                    <h4 className='welcome-author'>Welcome, {author.name}</h4>
            </div>
        })
    }*/

    let a;
    const changeAuthorDisplayed = () => {
        if(authors.length > 0){
            a = authors[Math.floor(Math.random() * authors.length)].name
            return a
        }
    }

    const setAuthorInterval = () => {
    }

/*    chooseTopic = () => {
        this.setState({topic: sentenceTopics[Math.floor(Math.random() * sentenceTopics.length)]})
      }
      
  handleCountdown = () => {
    this.setState({countdown: this.state.timer * 60})
    this.intervalID = setInterval(() => this.setState(previousState => {
      if (this.state.countdown >= 1) 
      return { 
        countdown: previousState.countdown - 1,
      }
    }), 1000)
  }      
 
*/ 
    return(
        <div className='homepage-container'>
            {/*{authorsCollection}*/}
            <p>{authorDisplayed}</p>
        </div>
    )
}
