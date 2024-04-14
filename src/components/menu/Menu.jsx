// import React from 'react'
import Dish from '../dish/Dish';
import './styles.scss';


const Menu = ({ dishIds }) => {

    return (
        <div className='menu'>
            {dishIds.map(id=>(
                    <Dish key={id} dishId={id}/>
            ))}
        </div>
    )
}

export default Menu