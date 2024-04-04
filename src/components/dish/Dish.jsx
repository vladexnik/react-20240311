import useCount from "../hooks/calc-count";

const Dish = ({dish}) => {
      
    const {name, ingredients, price}=dish;
    const {count, increment, decrement}=useCount();
    
    return (
        <>  
            <div>
                <button onClick={decrement} disabled={count === 0}>-</button>
                <span>{count}</span>
                <button onClick={increment} disabled={count === 5}>+</button>
            </div>
            <p>{name}: {price}$</p>
            <ul>{ingredients.map(ingredient=>(
                    <li key={ingredient}>{ingredient}</li>
            ))}
            </ul>
            <hr/>
        </>
    )
}

export default Dish;