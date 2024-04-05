// import React from 'react'
import Dish from '../dish/Dish';
import './styles.scss';


const Menu = ({ menu }) => {
    
    if(!menu){
        return null;
    }

    return (
        <div className='menu'>
            {menu.map(dish=>(
                    <Dish key={dish.id} dish={dish}/>
            ))}
        </div>
    )
}

export default Menu