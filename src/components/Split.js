function Split({ selected }) {

    if(!selected) return

    return (
        <form className='split'>
            <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>Split bill with {selected.name}</h1>

            <div className='split-container'>
                <label>Bill Value</label>
                <input type='text' />
            </div>

            <div className='split-container'>
                <label>Your Expense</label>
                <input type='text' />
            </div>

            <div className='split-container'>
                <label>Clark's expense</label>
                <input type='text' />
            </div>

            <div className='split-container'>
                <label>Who's paying the bill?</label>
                <select>
                    <option>You</option>
                    <option>Clark</option>
                </select>
            </div>

            <button>Split bill</button>


        </form>
    )
}

export default Split
