import React from 'react'

const Fetch = ({ onClick }) => {

        return (
            <div>
                <h2>Random Simpson Quote</h2>
                <button onClick={onClick}> Get Quote! </button>
            </div>
        )

}

export default Fetch;