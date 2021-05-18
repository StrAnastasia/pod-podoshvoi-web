import { GET_BAND, GET_GIGS, GET_NEWS, GET_LK, GET_SOME_INFO } from '../types/types'

import dotenv from 'dotenv'
import { useState } from 'react'
dotenv.config()

const getnewsFunc = (payload) => { return { type: GET_NEWS, payload: payload } }
const fetchAllNews = () => async (dispatch, getState) => {
  console.log('fetchAllInfa');
  const response = await fetch("http://localhost:8080/news");
  const thenews = await response.json()
  console.log(thenews);
  dispatch(getnewsFunc(thenews))
}

const gettheBand = (payload) => { return { type: GET_BAND, payload: payload } }
const getinfoFunc = (info) => async (dispatch, getState) => {
  console.log('fetch smth');
  const response = await fetch(`http://localhost:8080/bands/${info}`)
  const theband = await response.json()
  // console.log(theband);
  dispatch(gettheBand(theband))
}

const gettheGig = (payload) => { return { type: GET_GIGS, payload: payload } }
const getgigFunc = (info) => async (dispatch, getState) => {
  console.log('fetch the gig');
  const newinfo = info.replace(' ', "_")
  const response = await fetch(`http://localhost:8080/gigs/${newinfo}`)
  const theGig = await response.json()
  console.log(theGig, 'fetchhhhhhhhhhhhhhhhhhhh');
  dispatch(gettheGig(theGig))
}



export { fetchAllNews, getinfoFunc, getgigFunc };
