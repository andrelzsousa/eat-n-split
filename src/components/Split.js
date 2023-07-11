import { useState } from 'react'

function Split({ selected, setFriends}) {
    const [bill, setBill] = useState('')
    const [myExpense, setMyExpense] = useState('')
    const [payer, setPayer] = useState('me')

    if(!selected) return 



    function handleSubmit(e){
        e.preventDefault()


        const newDebt = payer === 'me' ? (bill - myExpense)* (-1) : myExpense 


        setFriends((friends) => friends.map((friend) => {
            return friend.id === selected.id ? {...friend, debt: friend.debt + Number(newDebt)} : friend
        }))

        setBill('')
        setMyExpense('')
        setPayer('me')
    }

    return (
        <form className='split' onSubmit={(e) => handleSubmit(e)}>
            <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>Split bill with {selected.name}</h1>

            <div className='split-container'>
                <label>Bill Value</label>
                <input type='text' value={bill} onChange={(e) => setBill(Number(e.target.value))}/>
            </div>

            <div className='split-container'>
                <label>Your Expense</label>
                <input type='text' value={myExpense} onChange={(e) => setMyExpense(e.target.value)}/>
            </div>

            <div className='split-container'>
                <label>{selected.name}'s expense</label>
                <input type='text'  value={bill - myExpense} disabled/>
            </div>

            <div className='split-container'>
                <label>Who's paying the bill?</label>
                <select value={payer} onChange={(e) => setPayer(e.target.value)}>
                    <option value='me'>You</option>
                    <option value='friend'>{selected.name}</option>
                </select>
            </div>

            <button type='submit'>Split bill</button>
        </form>
    )
}

export default Split
