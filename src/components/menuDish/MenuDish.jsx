
const MenuDish = ({menuDish}) => {
      
    const {name, ingredients, price}=menuDish;
    
    return (
        <>
            <p>{name}: {price}$</p>
            {ingredients.map(ingredient=>(
                    <li key={ingredient}>{ingredient}</li>
            ))}
            <hr/>
        </>
    )
}

export default MenuDish