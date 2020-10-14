import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm';

const Songlist = () => {
    // useState's first argument is the default value of the state
    // useState returns an array with two values. First is the state and second is the function that sets the state
    const [songs, setSongs] = useState([
        {title: 'Solway Firth', id: 1},
        {title: 'Nero Forte', id: 2},
        {title: 'Unsainted', id: 3}
    ])

    const [age, setAge] = useState(20);

    const addSong = (title) => {
        // Will replace the entire song
        setSongs([...songs, {title, id: uuid()}])
    }

    // This will render everytime the component mounts or re-renders
    // Second will be the dependency array which tells when the useEffect should trigger
    // If a blank array is specified, this will trigger only on mount/unMount
    useEffect(() => {
        console.log('Songs useEffect Ran ', songs);
    }, [songs])

    useEffect(() => {
        console.log('Age useEffect Ran ', age);
    }, [age])

    return (
        <div className='song-list'>
            <ul>
                {songs.map((song) => {
                    /* Each <li> component needs a unique key else it will behave erratically. This is used by React to track changes for each of the individual elements. */
                    return (                        
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add one to age: {age}</button>
        </div>
    )
}

export default Songlist;