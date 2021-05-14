import React from 'react'
import Gig from '../gig/gig'
import {useSelector} from 'react-redux'
export default function GigList() {

    const gigs = useSelector(state => state.gigs)
    return (
        <div className='gig-list'>
            { gigs?
                gigs.map((el)=>{
                    <Gig desc={el.desc} location={el.location}  />
                }):<p>Koncertov net =(</p>
            }
        </div>
    )
}
