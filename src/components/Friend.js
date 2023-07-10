function Friend({name, picture, debt}) {
    return (
        <div className='friend'>
            <div className='info'>
                <img src={picture} alt="pfp" className='pfp' />
                <div>
                    <h3>{name}</h3>
                    <p>{debt === 0 ? `You and ${name} are even` : debt > 0 ? `You owe ${name} $${Math.abs(debt)}` : `${name} owes you $${Math.abs(debt)}`}</p>
                </div>
            </div>
            <button>Select</button>
        </div>
    )
}

export default Friend