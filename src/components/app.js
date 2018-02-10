import React, { Component } from 'react'
import config from '../../config'

import SearchForm from './searchform';
import SearchResults from './searchresults';
import Loader from './loader'

import '../scss/main.scss';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error : {},
			data: [],
			suggest: [],
			fetching: false
		};
		
		this.fetchData = this.fetchData.bind(this);
		this.performSearch = this.performSearch.bind(this);
		this.autoSuggest = this.autoSuggest.bind(this);
	}

	/**
	 * 
	 * @param {*} term 
	 */
	fetchData(term = ''){
		//set fetch to true to show the loader before request it is completed.
		this.setState({
			fetching: true
		})
		
		fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${config.api}&query=${term}`)
		.then(response => response.json())
		.then(response => (
			console.log(response),
			this.setState({
				data: response.results,
				suggest: response.results.title,
				fetching: false

			})			
		)).catch(error => {
			const errors = error;
			errors.summary = error.message;
		  
			this.setState({
				error : errors,
				fetching: false

			});
		});
	}

	/**
	 * [ submit the form ]
	 * @param  {[event]} e [event object]
	 */
	performSearch(e){
		e.preventDefault();
		const value = document.querySelector('.search__input')
		this.fetchData(value.value);						
	}

	autoSuggest(e){
		e.preventDefault();
		this.fetchData(e.target.value)
		console.log(this.props,this.state.suggest, this.state.data)					
	}

  render() {
		const data = this.state.data.length > 0 ? this.state.data : [];
		const error = this.state.error;
		const fetching = this.state.fetching;
		console.log(this.state.data)
    return (
		<main className="main">
			<SearchForm error={error} onSubmit={this.performSearch} onClick={this.performSearch} onKeyUp={this.autoSuggest}/>

		{ fetching ?  
				<Loader /> :
				data.length > 1 ?
				<div>
						<SearchResults results={data} error={error}/>
				</div> : <p>Sorry not results found</p> 

			}
		</main>
	);
  }
}
