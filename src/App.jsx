import Layout from './components/layout/Layout';
import { useEffect, useState, } from 'react';
import RestaurantTabs from './components/restaurant-tabs/restaurant-tabs';
import Restaurant from './components/restaurant/Restaurant';
import { ThemeContextProviderComponent } from './contexts/theme';
import { UserContextProviderComponent } from './contexts/user';
import { useDispatch } from 'react-redux';
import { getDishes } from './redux/entities/dish/thunks/get-dishes';
import { getUsers } from './redux/entities/user/thunks/get-users';

const getSavedCurrentRestaurantIndex=()=>{
  return (localStorage.getItem("currentRestaurantIndex"));
}
const setCurrentRestaurantIndexStorage = (index) => {
        localStorage.setItem("currentRestaurantIndex", index?.toString())
}

function App() {

  const [currentRestaurantId,setCurrentRestaurantId]=useState(getSavedCurrentRestaurantIndex);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getDishes());
    dispatch(getUsers());
  },[dispatch])



  return (
    <ThemeContextProviderComponent>
      <UserContextProviderComponent>
        <Layout>
            <RestaurantTabs
              currentRestaurantId={currentRestaurantId}
              onTabClick={setCurrentRestaurantId}
              onClick={setCurrentRestaurantIndexStorage(currentRestaurantId)}
            />
            {currentRestaurantId && <Restaurant restaurantId={currentRestaurantId} />}
        </Layout>
      </UserContextProviderComponent>
    </ThemeContextProviderComponent>
  )
}

export default App;
