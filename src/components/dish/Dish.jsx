import useCount from "../hooks/calc-count";
import Button from "../button/button";
import styles from './styles.module.scss'
import { UserContext } from "../../contexts/user";
import { useContext } from "react";


const Dish = ({dish}) => {
      
    const {name, ingredients, price,img}=dish;
    const {count, increment, decrement}=useCount();
    
    const {user}=useContext(UserContext);
    console.log(user);

    return (
        <div className={styles.root}>    
            <h3>{name}: {price}$</h3>
            <img src={img} />
            <p>Ingredients:</p>
            <ul>{ingredients.map(ingredient=>(
                    <li key={ingredient}>{ingredient}</li>
            ))}
            </ul>
            {user ==='auth' && 
            <div>
                <Button
                    viewVariant="secondary"
                    size="s" 
                    onClick={decrement} 
                    disabled={count === 0}
                >
                -</Button>
                <span>{count}</span>
                <Button 
                    viewVariant="primary"
                    size="s" 
                    onClick={increment} 
                    disabled={count === 5}
                >
                +</Button>
            </div>
        
            }
        </div>
    )
}

export default Dish;