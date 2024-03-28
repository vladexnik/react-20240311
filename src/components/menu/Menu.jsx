// import React from 'react'
import MenuDish from '../menuDish/MenuDish';

const Menu = ({ menu }) => {
    
    if(!menu){
        return null;
    }

    return (
        <div>
            <h3>Menu</h3>
            {menu.map(menuDish=>(
                <div key={menuDish.id}>
                    <MenuDish menuDish={menuDish}/>
                </div>
            ))}
        </div>
    )
}

export default Menu