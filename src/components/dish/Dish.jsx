import Button from "../button/button";
import styles from './styles.module.scss'
import { UserContext } from "../../contexts/user";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { incrementDish, decrementDish } from "../../redux/ui/cart";
import { selectDishAmount } from "../../redux/ui/cart/selectors";


const Dish = ({dishId}) => {

    const dish=useSelector(state=> selectDishById(state, dishId));
    const amount=useSelector(state=> selectDishAmount(state, dishId));
    const dispatch=useDispatch();

    const {user}=useContext(UserContext);

    if(!dish){
        return <p>Loading...</p>;
    }

    const {name, ingredients, price}=dish;

    const increment=()=> dispatch(incrementDish(dishId));
    const decrement=()=> dispatch(decrementDish(dishId));

    return (
        <div className={styles.root}>    
            <h3>{name}: {price}$</h3>
            <p>Ingredients:</p>
            <ul>{ingredients?.map(ingredient=>(
                    <li key={ingredient}>{ingredient}</li>
            ))}
            </ul>
            
            {user ==='auth' && 
            <div>
                <Button
                    viewVariant="secondary"
                    size="s" 
                    onClick={decrement} 
                    disabled={amount === 0}
                >
                -</Button>
                <span>{amount}</span>
                <Button 
                    viewVariant="primary"
                    size="s" 
                    onClick={increment} 
                    disabled={amount === 7}
                >
                +</Button>
            </div>
        
            }
        </div>
    )
}

export default Dish;