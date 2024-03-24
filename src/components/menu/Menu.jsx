// import React from 'react'
import MenuItem from '../menuItem/MenuItem';

const Menu = ({ menu }) => {
    
    if(!menu){
        return null;
    }

    return (
        <div>
            {menu.map(menuItem=>(
                <div key={menuItem.id}>
                    <MenuItem menuItem={menuItem}/>
                </div>
            ))}
        </div>
    )
}

export default Menu