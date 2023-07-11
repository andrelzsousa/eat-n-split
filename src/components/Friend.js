function Friend({ friend, onSelect, selected }) {

    function handleSelect() {
        onSelect(selected && selected.id === friend.id ? null : friend)
    }

    const color = friend.debt === 0 ? "black" : friend.debt > 0 ? "red" : "green"


    return (
        <div className='friend'>
            <div className='info'>
                <img src={friend.picture} alt="pfp" className='pfp' />
                <div>
                    <h3>{friend.name}</h3>
                    <p style={{color: color}}>{friend.debt === 0 ? `You and ${friend.name} are even` : friend.debt > 0 ? `You owe ${friend.name} $${Math.abs(friend.debt)}` : `${friend.name} owes you $${Math.abs(friend.debt)}`}</p>
                </div>
            </div>
            <button onClick={handleSelect}>{selected && selected.id === friend.id ? "Close" : "Select"}</button>
        </div>
    )
}

export default Friend