import axios from 'axios';
import React, { Component } from 'react' 
import SearchBar from './components/SearchBar'
import MovieResult from './components/MovieResult'


class App extends Component {
   state={response: null}
    onSearchSubmit = async term => {
        const response = await axios.get(`http://www.omdbapi.com/?t=${term}&apikey=a15611a8`)
        this.setState({ response: response })
      
    }
    
    render() {
       return (
           <div className="ui container">
               <SearchBar onSubmit={this.onSearchSubmit} />
                <MovieResult searchResult={this.state.response} />
           </div>
       )
    }
    
}
export default App