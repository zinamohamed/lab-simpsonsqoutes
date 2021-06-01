import React from 'react'


const OneQuote = ({ character, quote, image }) => {

        return (
            <div>
                <figure>
                    <p>{character}</p>
                    <figcaption>{quote}</figcaption>
                    <img src={image} alt={character}/>
                </figure>
            </div>
        )

}

export default OneQuote;