import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {getinfoFunc} from '../../redux/AC/ac'

export default function News({ offsetYPost }) {
  const news = useSelector(state => state.news)

  // console.log('newsarrayfrom news', news);
  const dispatch = useDispatch()

  const findHandler = (e) => {
    let info = e.target.dataset.value
    dispatch(getinfoFunc(info))
  }

  return (
    <>
      {news ? news?.map(el =>

        <div className='homePage-post' style={{ opacity: offsetYPost }} >
          <div>
            {el?.image ? <img alt='post' src={el?.image} className="homePage-post-img" /> : null}
          </div>
          <div className="d-flex  align-items-center flex-column">
            <Link onClick={findHandler} data-value={el?.tags[0]} to={`/band/${el?.tags[0]}`} className='homePage-post-title' style={{"text-decoration": "none"}}>
            {el?.title}
            </Link>

          </div>

          <p className="homePage-post-text">{el?.text}</p>
        </div>
      )
        : null}
    </>)
}
