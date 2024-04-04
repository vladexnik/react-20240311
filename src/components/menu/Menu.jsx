// import React from 'react'
import Dish from '../dish/Dish';

const Menu = ({ menu }) => {
    
    if(!menu){
        return null;
    }

    return (
        <div>
            <h3>Menu</h3>
            {menu.map(dish=>(
                    <Dish key={dish.id} dish={dish}/>
            ))}
        </div>
    )
}

export default Menu