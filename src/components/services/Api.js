export const getSimpsonQuotes = async () => { 

  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const quote = await res.json()


  return { 
      character: quote[0].character,
      quote: quote[0].quote,
      image: quote[0].image
  };


};