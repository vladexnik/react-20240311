import './App.css';
import { restaurants } from '../materials/mock';
import Layout from './components/layout/Layout';
import { useState, } from 'react';
import RestaurantTabs from './components/restaurant-tabs/restaurant-tabs';
import Restaurant from './components/restaurant/Restaurant';


const getSavedCurrentRestaurantIndex=()=>{
  return Number(localStorage.getItem('currentRestaurantIndex'));
}
const setCurrentRestaurantIndexStorage = (index) => {
        localStorage.setItem("currentRestaurantIndex", index.toString())
}

function App() {

  const [currentRestaurantIndex,setCurrentRestaurantIndex]=useState(getSavedCurrentRestaurantIndex);
  const currentRestaurant=restaurants[currentRestaurantIndex];
  
  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        onTabClick={setCurrentRestaurantIndex}
        onClick={setCurrentRestaurantIndexStorage(currentRestaurantIndex)}
        currentIndex={currentRestaurantIndex}
      />
      {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
    </Layout>
  )
}

export default App
