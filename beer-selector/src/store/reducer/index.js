import {
  FETCH_BEER_START,
  FETCH_BEER_SUCCESS,
  FETCH_BEER_FAILURE
} from'../actions/index'



export const initialState = {
  error: '',
  isFetching: false,
  beer:null
}


export const reducer = (state = initialState, action) => {
  
  switch(action.type) {

    case FETCH_BEER_START:
      return{
        ...state,
        error: '',
        isFetching: true,
        beer:null
      };

      case FETCH_BEER_SUCCESS:
      return{
        ...state,
        error: '',
        isFetching: false,
        beer: action.payload
      };

      case FETCH_BEER_FAILURE:
      return{
        ...state,
        error: '',
        isFetching: false,
        beer:null
      };
  
    default:
      return state;
  };
}


