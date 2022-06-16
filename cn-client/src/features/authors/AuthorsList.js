import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { allAuthors} from './authorSlice';
import { fetchAuthors } from './authorSlice';

export const AuthorsList = () => {

    const dispatch = useDispatch();
    const authors = useSelector(allAuthors);

    

    return(
        <>
        </>
    )
}