import React from 'react'



const searchResults = ({results,err}) => {
  const base_url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
  return (
    <ul className='search__results card'>
      {results.length > 0 ? 
        results.map((result,i) => 
        <li key={i} className='card__block'>
          <img className='card__img' alt='100%x180' src={`${base_url}${result.poster_path}`} />
          <div className='card__block-inner'>
            <h3 className='card__title'>{result.title}</h3>	
            <p>{result.overview}</p>									
          </div>
          <div className="card__extra-info rating">
            <span>{Math.ceil((result.vote_average*100))}%</span> 
          </div>
        </li>
      ): <p>Sorry not results found.</p> }
    </ul>
    )
};


export default searchResults;