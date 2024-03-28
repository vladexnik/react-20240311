import { useState } from "react";

const MenuDish = ({menuDish}) => {
      
    const {name, ingredients, price}=menuDish;
    const [count, setCount]=useState(0);

    const calc=(num)=>{
        setCount(count=> count+num);
        
    }

    return (
        <>  
            <div>
                <button onClick={()=> calc(-1)} disabled={count === 0}>-</button>
                <span>{count}</span>
                <button onClick={()=> calc(+1)} disabled={count === 10}>+</button>
            </div>
            <p>{name}: {price}$</p>
            {ingredients.map(ingredient=>(
                    <li key={ingredient}>{ingredient}</li>
            ))}
            <hr/>
        </>
    )
}

export default MenuDish