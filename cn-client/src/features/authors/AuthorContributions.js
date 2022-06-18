import React from 'react';

export const AuthorContributions = ({contributions}) => {
    let allContributions;
    if (contributions){
        allContributions = contributions.map((contribution,i)=>{
            return <p key={i}>{contribution.text}</p>
        })
    }

    return(
        <>
            {allContributions}
        </>
    )
}