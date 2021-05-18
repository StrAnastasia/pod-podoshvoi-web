import React from 'react'
import imgPost3 from '../../images/concert2.jpg'
import './selectModule.scss'

export default function SelectMarkers({value, num, indx}) {
    console.log('---------->', num.length);
    return (
        
        <div className='select-post'>
            
                 <div className='num'>{indx}.&nbsp;</div>
            <div className='select-title'> {num}</div> 
        
       

        </div>

        

    
    )
}
