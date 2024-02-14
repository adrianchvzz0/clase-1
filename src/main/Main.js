// import React from 'react'
import Counter from './Counter';
import img from'./img/Porsche.jpg';
import './css/Counter.css';


function Main(){
    return(
        <div>
            <Counter datos={['José Adrián Chávez Hernández', '20977', '5°A']} />
            <img src={img} alt="Porsche.jpg"/>
            
        </div>
    )
}

export default Main