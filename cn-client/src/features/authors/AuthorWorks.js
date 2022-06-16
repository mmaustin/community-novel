import React from 'react';

export const AuthorWorks = ({works}) => {
    let allWorks;
    if (works){
        allWorks = works.map((work,i)=>{
            return <p key={i}>{work.title}</p>
        })
    }

    return(
        <>
            {allWorks}
        </>
    )
}