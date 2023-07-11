import Friend from './Friend.js';


function FriendList({friends, onSelect, selected}) {

    if (friends.length === 0) return <div className='friendList'>Start adding some new friends!</div>

    return (
        <div className='friendList'>
            {friends.map((f) => <Friend name={f.name} picture={f.picture} debt={f.debt} id={f.id} key={f.id} onSelect={onSelect} selected={selected}/>)}
        </div>
    )
}

export default FriendList