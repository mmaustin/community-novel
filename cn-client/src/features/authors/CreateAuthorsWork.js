import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

export const CreateAuthorsWork = ({author}) => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [contributions, setContributions] = useState(0);

    return(
        <>
            <p>Author's Work Component</p>
            {author.id}
        </>
    )
}