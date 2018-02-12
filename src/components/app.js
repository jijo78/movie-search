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
			error : '',
			data: [],
			fetching: false
		};
		
		this.fetchData = this.fetchData.bind(this);
		this.performSearch = this.performSearch.bind(this);
	}

	//Just fetching some initial data to display on the page.
	componentWillMount(){
		this.fetchData('a');
	}

	/**
	 * fetchData make the call to the moviedb api.
	 * @param {*} term value we need to pass to the query.
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
				fetching: false
			})			
		)).catch(error => {
			this.setState({
				error : error.message,
				fetching: false
			});
		});
	}

	/**
	 * submit the form calling fetchData with the right value.
	 * @param  {[event]} e [event object]
	 */
	performSearch(e){
		e.preventDefault();
		const value = document.querySelector('.search__input')
		this.fetchData(value.value);						
	}


  render() {
		const data = this.state.data;
		const fetching = this.state.fetching;
    return (
		<main className="main">
		<h1>Welcome to your movie search. </h1>
		<SearchForm onSubmit={this.performSearch} onClick={this.performSearch}/>

			{ fetching ?  
				<Loader /> :
				<div>
					<SearchResults results={data} />	
				</div>
			}
		</main>
	);
  }
}