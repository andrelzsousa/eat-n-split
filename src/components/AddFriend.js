import { useState } from 'react'
import rosto from '../assets/images/rosto.png'

function AddFriend({ onAddFriend }) {

    const [nameValue, setNameValue] = useState('')
    const [imageValue, setImageValue] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        const newFriend = {
            name: nameValue,
            picture: rosto,
            debt: 0,
            id: Date.now()
        }

        onAddFriend(newFriend)
    }

    return (
        <>
            {isOpen ? (
                <form className='addFriend' onSubmit={(e) => handleSubmit(e)}>
                    <div className='add-container'>
                        <label className='label'>Friend Name</label>
                        <input type='text' value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
                    </div>
                    <div className='add-container'>
                        <label className='label'>Image URL</label>
                        <input type='text' value={imageValue} onChange={(e) => setImageValue(e.target.value)} />
                    </div>
                    <button>Add</button>

                </form>
            ) : (
                null
            )}

            <button onClick={() => setIsOpen((is) => setIsOpen(!is))} style={{ width: '60px', marginTop: '1em' }} type='submit'>{isOpen ? 'Close' : 'Add Friends'}</button>
        </>
    )
}

export default AddFriend
