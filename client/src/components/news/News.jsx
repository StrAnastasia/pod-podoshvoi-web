import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


export default function News({offsetYPost }) {
  const news = useSelector(state => state.news)

  console.log('newsarrayfrom news', news);
  return (
    <>
      {news ? news?.map(el =>
        <div className='homePage-post' style={{ opacity: offsetYPost }}>

          <div style={{ marginRight: 400 }}>
            {el?.image ? <img alt='post' src={el?.image} className="homePage-post-img" />
              : null}
          </div>
          <div className="d-flex  align-items-center flex-column">
            <h1 className='homePage-post-title'>{el?.title}</h1>
          </div>
          <p className="homePage-post-text">
            {el?.text}
          </p>
        </div>)
        : null}
    </>
  )
}
