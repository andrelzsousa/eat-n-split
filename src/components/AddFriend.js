function AddFriend() {
    return (
        <div className='addFriend'>
            <div className='add-container'>
                <label className='label'>Friend Name</label>
                <input type='text' />
            </div>
            <div className='add-container'>
                <label className='label'>Image URL</label>
                <input type='text' />
            </div>
                <button>Add</button>

        </div>
    )
}

export default AddFriend
