import React from 'react'
import './loaderStyles.css'

export const Loader = () => {
    return (
        <>
            <div className='pan-loader'>
                <div className='loader'></div>
                <div className='pan-container'>
                    <div className='pan'></div>
                    <div className='handle'></div>
                </div>
                <div className='shadow'></div>
            </div>
        </>
    )
}
