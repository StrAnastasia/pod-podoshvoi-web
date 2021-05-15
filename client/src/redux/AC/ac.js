import { GET_BAND, GET_GIGS, GET_NEWS, GET_LK } from '../types/types'

import dotenv from 'dotenv'
import { useState } from 'react'
dotenv.config()

const getnewsFunc = (payload) => { return { type: GET_NEWS, payload: payload } }
const fetchAllNews = () => async (dispatch, getState) => {
  console.log('fetchAllInfa');
  const response = await fetch("http://localhost:8080/news");
  const thenews = await response.json()
  dispatch(getnewsFunc(thenews))
}



export { fetchAllNews };
