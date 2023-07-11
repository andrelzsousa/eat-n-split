function Friend({name, picture, debt, id, onSelect, selected}) {

    function handleSelect(){

        if (selected && selected.id === id){
            onSelect(null)
            return
        }

        onSelect({
            name: name,
            id: id
        })
    }

    return (
        <div className='friend'>
            <div className='info'>
                <img src={picture} alt="pfp" className='pfp' />
                <div>
                    <h3>{name}</h3>
                    <p>{debt === 0 ? `You and ${name} are even` : debt > 0 ? `You owe ${name} $${Math.abs(debt)}` : `${name} owes you $${Math.abs(debt)}`}</p>
                </div>
            </div>
            <button onClick={handleSelect}>{selected && selected.id === id ? "Close" : "Select"}</button>
        </div>
    )
}

export default Friend