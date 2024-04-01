// import React from 'react'
import Dish from '../menuDish/MenuDish';

const Menu = ({ menu }) => {
    
    if(!menu){
        return null;
    }

    return (
        <div>
            <h3>Menu</h3>
            {menu.map(dish=>(
                <div key={dish.id}>
                    <Dish dish={dish}/>
                </div>
            ))}
        </div>
    )
}

export default Menu