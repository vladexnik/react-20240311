import { restaurants } from "../../materials/mock"


export const Resturants=()=>{
    
    return(
        <div>
            <div>
                <section>
                    <h1>{restaurants[0].name}</h1>
                    <h3>Menu</h3>
                    <ul id={restaurants[0].menu[0].id}>
                        <li>Name: {restaurants[0].menu[0].name}</li>
                        <li>Price: {restaurants[0].menu[0].price} $</li>
                        <li>Ingridients: {restaurants[0].menu[0].ingredients.join(', ')}</li>
                    </ul>
                    <ul id={restaurants[0].menu[1].id}>
                        <li>Name: {restaurants[0].menu[1].name}</li>
                        <li>Price: {restaurants[0].menu[1].price} $</li>
                        <li>Ingridients: {restaurants[0].menu[1].ingredients.join(', ')}</li>
                    </ul>
                    <ul id={restaurants[0].menu[2].id}>
                        <li>Name: {restaurants[0].menu[2].name}</li>
                        <li>Price: {restaurants[0].menu[2].price} $</li>
                        <li>Ingridients: {restaurants[0].menu[2].ingredients.join(', ')}</li>
                    </ul>

                    <h3>Отзывы</h3>
                    <ul>
                        <li id={restaurants[0].reviews[0].id}> {restaurants[0].reviews[0].user}: {restaurants[0].reviews[0].text} - {restaurants[0].reviews[0].rating} </li>
                        <li id={restaurants[0].reviews[1].id}>{restaurants[0].reviews[1].user}: {restaurants[0].reviews[1].text} - {restaurants[0].reviews[1].rating} </li>
                    </ul>
                </section>

                <section>
                    <h1>{restaurants[1].name}</h1>
                    <h3>Menu</h3>
                    <ul id={restaurants[1].menu[0].id}>
                        <li>Name: {restaurants[1].menu[0].name}</li>
                        <li>Price: {restaurants[1].menu[0].price} $</li>
                        <li>Ingridients: {restaurants[1].menu[0].ingredients.join(', ')}</li>
                    </ul>
                    <ul id={restaurants[1].menu[1].id}>
                        <li>Name: {restaurants[1].menu[1].name}</li>
                        <li>Price: {restaurants[1].menu[1].price} $</li>
                        <li>Ingridients: {restaurants[1].menu[1].ingredients.join(', ')}</li>
                    </ul>

                    <h3>Отзывы</h3>
                    <ul>
                        <li id={restaurants[1].reviews[0].id}> {restaurants[1].reviews[0].user}: {restaurants[1].reviews[0].text} - {restaurants[1].reviews[0].rating} </li>
                        <li id={restaurants[1].reviews[1].id}>{restaurants[1].reviews[1].user}: {restaurants[1].reviews[1].text} - {restaurants[1].reviews[1].rating} </li>
                        <li id={restaurants[1].reviews[2].id}>{restaurants[1].reviews[2].user}: {restaurants[1].reviews[2].text} - {restaurants[1].reviews[2].rating} </li>
                    </ul>
                </section>

                <section>
                    <h1>{restaurants[2].name}</h1>
                    <h3>Menu</h3>
                    <ul id={restaurants[2].menu[0].id}>
                        <li>Name: {restaurants[2].menu[0].name}</li>
                        <li>Price: {restaurants[2].menu[0].price} $</li>
                        <li>Ingridients: {restaurants[2].menu[0].ingredients.join(', ')}</li>
                    </ul>
                    <ul id={restaurants[2].menu[1].id}>
                        <li>Name: {restaurants[2].menu[1].name}</li>
                        <li>Price: {restaurants[2].menu[1].price} $</li>
                        <li>Ingridients: {restaurants[2].menu[1].ingredients.join(', ')}</li>
                    </ul>
                    <ul id={restaurants[2].menu[2].id}>
                        <li>Name: {restaurants[2].menu[2].name}</li>
                        <li>Price: {restaurants[2].menu[2].price} $</li>
                        <li>Ingridients: {restaurants[2].menu[2].ingredients.join(', ')}</li>
                    </ul>

                    <h3>Отзывы</h3>
                    <ul>
                        <li id={restaurants[2].reviews[0].id}> {restaurants[2].reviews[0].user}: {restaurants[2].reviews[0].text} - {restaurants[2].reviews[0].rating} </li>
                    </ul>
                </section>

                <section>
                    <h1>{restaurants[3].name}</h1>
                    <h3>Menu</h3>
                    <ul id={restaurants[3].menu[0].id}>
                        <li>Name: {restaurants[3].menu[0].name}</li>
                        <li>Price: {restaurants[3].menu[0].price} $</li>
                        <li>Ingridients: {restaurants[3].menu[0].ingredients.join(', ')}</li>
                    </ul>
                    <ul id={restaurants[3].menu[1].id}>
                        <li>Name: {restaurants[3].menu[1].name}</li>
                        <li>Price: {restaurants[3].menu[1].price} $</li>
                        <li>Ingridients: {restaurants[3].menu[1].ingredients.join(', ')}</li>
                    </ul>

                    <h3>Отзывы</h3>
                    <ul>
                        <li id={restaurants[3].reviews[0].id}> {restaurants[3].reviews[0].user}: {restaurants[3].reviews[0].text} - {restaurants[3].reviews[0].rating} </li>
                        <li id={restaurants[3].reviews[1].id}> {restaurants[3].reviews[1].user}: {restaurants[3].reviews[1].text} - {restaurants[3].reviews[1].rating} </li>
                    </ul>
                </section>

                

                <h3></h3>
            </div>
        </div>

    )
}