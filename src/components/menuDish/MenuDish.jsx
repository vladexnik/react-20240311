import { useState } from "react";

const Dish = ({dish}) => {
      
    const {name, ingredients, price}=dish;
    const [count, setCount]=useState(0);
``
    const calcCountDish=(num)=>{
        setCount(count=> count+num);
    }

    return (
        <>  
            <div>
                <button onClick={()=> calcCountDish(-1)} disabled={count === 0}>-</button>
                <span>{count}</span>
                <button onClick={()=> calcCountDish(+1)} disabled={count === 10}>+</button>
            </div>
            <p>{name}: {price}$</p>
            {ingredients.map(ingredient=>(
                    <li key={ingredient}>{ingredient}</li>
            ))}
            <hr/>
        </>
    )
}

export default Dish;