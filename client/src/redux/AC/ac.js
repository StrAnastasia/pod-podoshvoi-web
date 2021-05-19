import { GET_BAND, GET_GIGS, GET_NEWS, GET_LK, GET_PLACE } from '../types/types'

import dotenv from 'dotenv'
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
  const response = await fetch(`http://localhost:8080/bands/${info}`)
  const theband = await response.json()
  console.log(theband);
  dispatch(gettheBand(theband))
}

const gettheGig = (payload) => { return { type: GET_GIGS, payload: payload } }

const getgigFunc = (info) => async (dispatch, getState) => {
  console.log(info);
  if (info.split('').includes(' ')) {
    const newinfo = info.replace(' ', "_")
    const response = await fetch(`http://localhost:8080/gigs/${newinfo}`)
  }
  const response = await fetch(`http://localhost:8080/gigs/${info}`)
  const theGig = await response.json()
  dispatch(gettheGig(theGig))
}

const getthePlace = (payload) => { return { type: GET_PLACE, payload: payload } }
const getplaceFunc = (place) => async (dispatch, getState) => {
  const newplace = place.replace(' ', "_")
  console.log(newplace, 'for fetch');

  const response = await fetch(`http://localhost:8080/place/${newplace}`)
  const thePlace = await response.json()
  console.log(thePlace);
  dispatch(getthePlace(thePlace))
}



export { fetchAllNews, getinfoFunc, getgigFunc, getplaceFunc };
