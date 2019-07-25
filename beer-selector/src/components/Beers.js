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
  return <Loader type="TailSpin" color="#a3362e" height='100' width='100' />
}

  return (
    <div>

      <div>
        <h1>Long Day and need a drink?</h1>
        <h2>Click below and let us pick one for you!</h2>
      </div>

      <div>
        <button onClick={getBeer}>Make a beer run!</button>
      </div>

{/* THIS IS WHERE WE WILL PASS IN RES DATA ITEMS */}

      <div>

        <div>
          <h1>{props.beer.something}</h1>
          <h1>{props.beer.something}</h1>
          <h1>{props.beer.something}</h1>
        </div>

        <div>
          <h1>{props.beer.something}</h1>
          <h1>{props.beer.something}</h1>
          <h1>{props.beer.something}</h1>
        </div>

      </div>
{/* THIS IS WHERE WE WILL PASS IN RES DATA ITEMS */}

    </div>
  )
};


const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    beer: state.beer
  };
};
//connect to store


export default connect(mapStateToProps, { fetchBeer}) (Beers);
