import { GET_LK, GET_NEWS, GET_BAND, GET_GIGS, GET_SOME_INFO } from '../types/types';

const podsosReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LK:
      return {
        ...state,
        user: action.payload
      }
    case GET_NEWS:
      return {
        ...state,
        news: action.payload
      }
    case GET_GIGS:
      return {
        ...state,
        gigs: action.payload
      }
    case GET_BAND:
      return {
        band: action.payload,
      };
    case GET_SOME_INFO:
      return {
        info: action.payload,
      };

    default:
      return state;
  }
};

export default podsosReducer;
