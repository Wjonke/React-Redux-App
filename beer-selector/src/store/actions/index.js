import axios from 'axios'

export const FETCH_BEER_START =   'FETCH_BEER_START';
export const FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS';
export const FETCH_BEER_FAILURE = 'FETCH_BEER_FAILURE';




export const fetchBeer = () => dispatch => {
  dispatch({type: FETCH_BEER_START});

  axios
    .get('https://cors-anywhere.herokuapp.com/https://api.punkapi.com/v2/beers/random')

    .then(res => {
      dispatch({type:FETCH_BEER_SUCCESS, payload: res.data});
    })

    .catch((err => console.log(err.response)))

}


