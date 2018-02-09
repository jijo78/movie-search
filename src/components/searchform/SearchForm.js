import React, {PropTypes} from 'react';

const SearchForm = ({
    onChange,
    value,
    error
})=>(
    <section className="search">
        <h1>Search for a movie...</h1>
        <form action="" className="search__form" role="search">
            <fieldset>
                <label for="search" className="search__form--hidden">Find your movie</label>
                <input type="text" placeholder="Search for a movie..." name="name" value={value} onChange={onChange} className="search__input"   />
            </fieldset>
        </form>
        {
            error.summary ? (
                <p className='search__error-msg'>{error.summary }</p>
            ):(
                <p></p>						
            )
        }
    </section>
)
