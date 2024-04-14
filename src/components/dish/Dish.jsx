import useCount from "../hooks/calc-count";
import Button from "../button/button";
import styles from './styles.module.scss'
import { UserContext } from "../../contexts/user";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Dish = ({dishId}) => {
    const dish=useSelector(state=> state.dish.entities[dishId])
    
    const {name, ingredients, price, img}=dish;

    const {count, increment, decrement}=useCount();

    const {user}=useContext(UserContext);

    return (
        <div className={styles.root}>    
            <h3>{name}: {price}$</h3>
            <p>Ingredients:</p>
            <ul>{ingredients.map(ingredient=>(
                    <li key={ingredient}>{ingredient}</li>
            ))}
            </ul>
            <img src={img} />
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