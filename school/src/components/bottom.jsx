import React from 'react'
import bot from '../img/bottom.jpg'
const imgStyle={
    width:'100vw',
    marginTop:'10px',
   
}

export default class Bottom extends React.Component{
    constructor(){
        super()
    }

    state={

    }
  
    render(){
        return(
            <>
            <div id='bottom'>
            <img src={bot} style={imgStyle}/>

            </div>
           
               
            </>
        )
    }
} 