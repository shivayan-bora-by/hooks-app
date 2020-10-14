import React, {useState} from 'react';

const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='song-name'>Song Name: </label>
            <input id='song-name' value={title} type='text' required  onChange={(e) => setTitle(e.target.value)}/>
            <input type='submit' value='Add Song' />
        </form>
    )
}

export default NewSongForm;