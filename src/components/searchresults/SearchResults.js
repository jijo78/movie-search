import React from 'react'
import moment from 'moment'


const searchResults = ({results,err}) => {
  const base_url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
  return (
    <ul className='search__results card'>
      {results.map((result,i) => 
        <li key={i} className='card__block'>
        <div className='card__block-media'>
          <img className='card__img' alt='100%x180' src={`${base_url}${result.poster_path}`} />
        </div>
        <div className='card__block-inner'>
          <div>
            <h3 className='card__title'>{result.title}</h3>	
            <p className='card__description'>{result.overview}</p>									
          </div>
          <div className="card__extra-info">
            <span className='card__rating'>Rating: {Math.ceil(( result.vote_average * 10 ))}%</span> 
            <span className='card__release'>Release date: { moment(result.release_date).format('LL')}</span> 
          </div>
        </div>
      </li>
      )
      }
    </ul>
    )
};


export default searchResults;