import React from 'react'

const FilmsSection = ({ filmsToMap }) => {
    const films = filmsToMap.map((film) => {
        return (
            <>
                <p>film</p>
            </>
        )
    })
    
    return <>{films}</>
}

export default FilmsSection
