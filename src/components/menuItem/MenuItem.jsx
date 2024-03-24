
const MenuItem = ({menuItem}) => {
      
    const {name, ingredients, price}=menuItem;
    
    return (
        <>
            <p>{name}: {price}</p>
            {ingredients.map(ingredient=>(
                    <li key={ingredient}>{ingredient}</li>
            ))}
        </>
    )
}

export default MenuItem