import React, {PropTypes} from 'react';

const SearchForm = ({
    onSubmit,
    error
})=>(
    <section className="search">
        <form action="" className="search__form" role="search" onSubmit={onSubmit}>
            <fieldset>
                <label for="search" className="search__form--hidden">Find your movie</label>
                <input type="text" placeholder="Search for a movie..." name="name" className="search__input" />
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


export default SearchForm;