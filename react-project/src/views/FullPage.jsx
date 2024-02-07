import React from 'react'
import Recently from './Recently'
import Luxery from './Luxery'

const FullPage = () => {
  return (
    <div>
       <div class="main">
            <div class="wrapper">
                <h3>Recently Added</h3>
                
                {/* <!--Displaying Recently Added Houses in Boxes--> */}
                <Recently/>
                
                <h3>Luxurious Houses</h3>
                {/* <!--Displaying Luxurious Houses in Boxes--> */}
                <Luxery/>
            </div>
        </div>
    </div>
  )
}

export default FullPage
