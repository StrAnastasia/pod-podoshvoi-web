import React from 'react'
import imgPost3 from '../../images/concert2.jpg'
import './selectModule.scss'

export default function SelectMarkers({ value, num, indx, selectHandler, name, date }) {
    console.log('---------->', num.length);
    return (
        <>

            <div className='select-post'>
                <button style={{marginLeft: 50, width: 300}} className="btn btn-dark" onClick={() => selectHandler(value)}>
                    <div className="buttonConteiner">

                    <div className="buttonText">
                    {name}
                    </div>
                    <div className="buttoDate">
                    {date}
                    </div>


                    </div>
                </button>

            </div>




        </>

    )
}
