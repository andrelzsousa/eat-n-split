import Friend from './Friend.js';
import { useState } from 'react';

// const friends = [
//     {
//         name: 'Clark',
//         picture: rosto,
//         debt: 0
//     },
//     {
//         name: 'Sarah',
//         picture: rosto,
//         debt: 0
//     },
//     {
//         name: 'Anthony',
//         picture: rosto,
//         debt: 0
//     }
// ]


function FriendList({friends}) {

    if (friends.length === 0) return <div className='friendList'>Start adding some new friends!</div>

    return (
        <div className='friendList'>
            {friends.map((f) => <Friend name={f.name} picture={f.picture} debt={f.debt}/>)}
        </div>
    )
}

export default FriendList