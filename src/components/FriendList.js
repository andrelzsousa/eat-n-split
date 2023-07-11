import Friend from './Friend.js';


function FriendList({friends, onSelect, selected}) {

    if (friends.length === 0) return <div className='friendList'>Start adding some new friends!</div>

    return (
        <div className='friendList'>
            {friends.map((f) => <Friend friend={f}key={f.id} onSelect={onSelect} selected={selected}/>)}
        </div>
    )
}

export default FriendList