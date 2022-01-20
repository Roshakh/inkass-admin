import React from 'react'
import Accordion from './Accordion/Accordion.jsx';
import { accordionData } from '../../../../dummydata';
import "./Region.css"

function Region() {
    return (
        <div className='region'>
            <div className='regionBox'>
               <h1>Регионы</h1>
           <div className="accordion">
                {accordionData.map(({ title, content, input }) => (
               <Accordion title={title} content={content} input={input} />
              ))}
            </div>
            </div>
        </div>
    )
}

export default Region
