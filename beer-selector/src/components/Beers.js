import React from 'react'
import { connect } from "react-redux";

import Loader from "react-loader-spinner";

import {fetchBeer} from '../store/actions/index'


const Beers = props => {
  const getBeer = event => {
    event.preventDefault();
    props.fetchBeer();
  };

  if (props.isFetching) {
  return (
    <div>
      <Loader type="TailSpin" color="#a3362e" height='100' width='100' />,
      <h1>Making a beer run!</h1>
    </div>
  )
}


if (props.beer !== '') {
  return (
    <div>

      <div>
        <h1>Enjoy!</h1>
        <h2>Check out the food pairings below for dinner ideas</h2>
      </div>

      <div>
        <p>Is this beer not for you?</p>
        <button onClick={getBeer}>Pick Another!</button>
      </div>

      <div>
        <h1>{props.beer.name}</h1>
        <h2>{props.beer.tagline}</h2>
        <img 
          height="300px" 
          width="auto" 
          src={props.beer.image_url} 
          alt="pic of beer listed"
        />
        <p> ABV:   {props.beer.abv}</p>
        <p> Description: {props.beer.description}</p>
        <p> Food Pairing: 
          {props.beer.food_pairing.map(food => {
            return <li key={props.beer.id}>{food}</li>
            // key is not unique due to duplicate data in API
          })}
        </p>

        <div>
          <h3>***Disclaimer***</h3>
          <p>We are not responsible for what happens if you ask your wife to fetch this beer.</p>
        </div>
        
      </div>

    </div> 

  )
} else{
    return(
      <div>
        <div>
          <h1>Long Day and need a drink?</h1>
          <h2>Click below and let us pick one for you!</h2>
        </div>

        <div>
          <button onClick={getBeer}>Send It!</button>
        </div>
      </div>
  )
}



};


const mapStateToProps = state => {
  
  return {
    error: state.error,
    isFetching: state.isFetching,
    beer: state.beer
  };
};
//connect to store


export default connect(mapStateToProps, { fetchBeer}) (Beers);
