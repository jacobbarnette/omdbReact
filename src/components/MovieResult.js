import React, { Component } from 'react'
import './MovieResults.css'
const MovieResult = props => {
  
  
    console.log(props.searchResult)
    if(props.searchResult === null) {
        return <div>Please Search for a Movie by title</div>
    } else {
        return <div> 
        <h1>{props.searchResult.data.Title}</h1>
        <div className="container">
            <div className="posterContainer">
                <p><img src={props.searchResult.data.Poster} alt=""/></p>
            </div>
            <div className="dataContainer">
                <p> <span className="rowHeader">Rating: </span>{props.searchResult.data.Rated}</p>
                <p> <span className="rowHeader">Summary: </span> {props.searchResult.data.Plot}</p>
                <p> <span className="rowHeader">Director: </span> {props.searchResult.data.Director}</p>
                <p><span className="rowHeader">Writers: </span>{props.searchResult.data.Writer}</p>
                <p><span className="rowHeader">Stars: </span>{props.searchResult.data.Actors}</p>
            </div>
        </div>
        
        </div>
    }
}

export default MovieResult 