import React, { useState } from 'react'
import Fetch from '../presentations/FetchButton'
import OneQuote from '../presentations/SingleQuote'
import { getSimpsonQuotes } from '../services/Api'

const SimpsonQuote = () => {

    const [quote, setQuote] = useState({})

    const handleClick = async () => { 
        const quote = await getSimpsonQuotes();
        console.log(quote);
        setQuote(quote);

    }
    return (
        <div>
            <Fetch onClick={handleClick}/>
            <OneQuote 
                character={quote.character}
                quote={quote.quote}
                image={quote.image}
            />
        </div>
        )
};

export default SimpsonQuote 