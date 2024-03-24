import './App.css';
import { restaurants } from '../materials/mock';
import Restaurant from './components/restaurant/Restaurant';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      {restaurants.map(restaurant=>(
        <div key={restaurant.id}>
          <Restaurant  restaurant={restaurant}/>
        </div>
      ))}
    </Layout>
  )
}

export default App
