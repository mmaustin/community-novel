import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createContribution} from './contributionSlice';

export const AddContribution = ({work}) => {



    return(
        <>
            <p>{work.id}</p>
        </>
    )
}