import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function LoadingSpinner() {
    return (
        <div>
            <h2>Loading</h2>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>
    )
}

export default LoadingSpinner;