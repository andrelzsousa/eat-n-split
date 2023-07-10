import rosto from '../assets/images/rosto.png'

function Friend() {
    return (
        <div className='friend'>
            <div className='info'>
                <img src={rosto} alt="pfp" className='pfp' />
                <div>
                    <h3>Clark</h3>
                    <p>you and Clark are even</p>
                </div>
            </div>
            <button>Select</button>
        </div>
    )
}

export default Friend