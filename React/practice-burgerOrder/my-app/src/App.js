import { useReducer, useState } from 'react';
import './App.css';
import Meals from './components/Meals/Meals';
import CartContext from './store/CartContext';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';

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

const cartReducer = (state, action) => {
  // copy cartData
  const newCart = {...state}

  switch(action.type){
    default: 
      return state;
    case "addCartItem":
      // item: the item will be added to the cart
      if(newCart.items.indexOf(action.item) === -1){
        newCart.items.push(action.item)
        action.item.amount = 1
      }else{
        action.item.amount += 1
      }
      newCart.totalPrice += action.item.price
      newCart.totleAmount += 1
      return newCart
    case "removeCartItem":
      action.item.amount -= 1
      if(action.item.amount === 0){
        newCart.items.splice(newCart.items.indexOf(action.item),1)
      }

      newCart.totalPrice -= action.item.price
      newCart.totleAmount -= 1
      return newCart
    case "clearCart":
      newCart.items.forEach(item => delete item.amount)
      newCart.totalPrice = 0
      newCart.totleAmount = 0
      newCart.items = []
      return newCart
  }
}

function App() {

  const [mealsData, setMealsData] = useState(MEALS_DATA)

  const [showFilter, setShowFilter] = useState(MEALS_DATA)

  

  // 创建一个state，用来存储购物车的数据
  // 1. 商品：[]  2.商品总数  3. 商品总价
  // const [cartData, setCartData] = useState({
  //   items: [],
  //   totleAmount: 0,
  //   totalPrice: 0
  // })

  const [cartData, cartDispatch] = useReducer(cartReducer, {
      items: [],
      totleAmount: 0,
      totalPrice: 0
    })


  // add item to the cart
  // const addItemHandler = (item) => {
  //   // item: the item will be added to the cart
  //   // copy cartData
  //   const newCart = {...cartData}
    
  //   if(newCart.items.indexOf(item) === -1){
  //     newCart.items.push(item)
  //     item.amount = 1
  //   }else{
  //     item.amount += 1
  //   }
  //   newCart.totalPrice += item.price
  //   newCart.totleAmount += 1
  //   setCartData(newCart)
  // }

  // remove item to the cart
  // const removeItemHandler = (item) => {
  //   // item: the item will be added to the cart
  //   // copy cartData
  //   const newCart = {...cartData}

  //   item.amount -= 1
  //   if(item.amount === 0){
  //     newCart.items.splice(newCart.items.indexOf(item),1)
  //   }

  //   newCart.totalPrice -= item.price
  //   newCart.totleAmount -= 1
  //   // setCartData(newCart)
  // }

  const valueChangeHandler = (keyword) => {
    const lowercaseValue = keyword.toLowerCase();

    const filteredMealData = mealsData.filter(item => {
        return item.title.toLowerCase().includes(lowercaseValue) || item.desc.toLowerCase().includes(lowercaseValue);
    });
    setShowFilter(filteredMealData);
  
  };

  // const clearCartHandler = () => {
  //   const newCart = {...cartData}
  //   newCart.items.forEach(item => delete item.amount)
  //   newCart.totalPrice = 0
  //   newCart.totleAmount = 0
  //   newCart.items = []
    
  //   // setCartData(newCart)
  // }

  const myParameter = {
    ...cartData, cartDispatch
  }

  return (
    <CartContext.Provider value={myParameter}>
      <div className="App" style={{width:'750rem', fontSize:20}}>
        <Search valueChangeHandler={valueChangeHandler}/>
        <Meals mealsData={showFilter} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
