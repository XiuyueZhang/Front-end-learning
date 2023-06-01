import { useState } from 'react';
import './App.css';
import Meals from './components/Meals/Meals';

// set Food list data here
const MEALS_DATA = [
  {
    id: '1',
    title:'Big Mac',
    desc:'Take two 100% beef patties sourced from farmers in regions.',
    price: 12,
    img: '/img/food/1.jpg'
  },
  {
    id: '2',
    title:'McChicken',
    desc:'Made with New Zealand chicken breast sourced from Ingham®, in a seasoned tempura coating.',
    price: 10,
    img: '/img/food/2.jpg'
  },
  {
    id: '3',
    title:'Filet-O-fish',
    desc:'Dive in and enjoy our Filet-O-Fish. Sourced for its succulent and fresh flavour.',
    price: 9,
    img: '/img/food/3.jpg'
  },
  {
    id: '4',
    title:'BBQ Bandit',
    desc:'BBQ lovers, this one’s for you. A 100% New Zealand grilled beef patty, cheese, bacon, crunchy onion rings, all smothered in smoky BBQ sauce.',
    price: 12,
    img: '/img/food/4.jpg'
  },
  {
    id: '5',
    title:'Crispy Chicken Almighty',
    desc:'Good things come in almighty packages. Featuring two chicken patties made with 100% New Zealand chicken breast.',
    price: 12,
    img: '/img/food/5.jpg'
  },
  {
    id: '6',
    title:'Chicken Bacon Deluxe',
    desc:'It’s deluxe! Crispy or grilled NZ chicken dressed with bacon, fresh tomato, tasty cheese and topped off with creamy mayo.',
    price: 15,
    img: '/img/food/6.jpg'
  },
  {
    id: '7',
    title:'Almighty Texan BBQ',
    desc:'Two 100% NZ Angus grass fed beef patties, double the cheese, bacon, caramelised onions, mayonnaise and BBQ sauce, top AND bottom.',
    price: 16,
    img: '/img/food/7.jpg'
  },
  {
    id: '8',
    title:'Sausage & Egg McMuffin',
    desc:'A hard-hitting combo of a free range egg, beef sausage patty and a melting slice of cheese on a classic English Muffin. ',
    price: 8,
    img: '/img/food/8.jpg'
  }
]



function App() {

  const [mealsData, setMealsData] = useState(MEALS_DATA)

  return (
    <div className="App" style={{width:'750rem', fontSize:20}}>
      <Meals mealsData={mealsData}/>
    </div>
  );
}

export default App;
