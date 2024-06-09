
import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Searchbar from './components/Searchbar'
import {productsdata} from './db/dummydata'
import Sidebar from './components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MyCart from './components/MyCart'
function App() {

const [selectedCategory, setSelectedCategory] = useState(null);

const [searchQuery,  setSearchQuery] = useState('');
const [priceRange,setPriceRange]= useState(500);
const [pickedItems,setPickedItems]= useState([]);
const [showCart, setShowCart] = useState(false);

function handelInput(e){
  setSelectedCategory(null)
  setPriceRange(500)
  setSearchQuery(e.target.value);
}
  // const product = [
  //   { id: 1, productname: "xbox", price: 20000 },
  //   { id: 2, productname: "xbox2", price: 20000 },
  //   { id: 3, productname: "xbox3", price: 20000 },
  //   { id: 4, productname: "xbox4", price: 20000 },
  //   { id: 5, productname: "xbox5", price: 20000 },
  //   { id: 6, productname: "xbox6", price: 20000 },
  //   { id: 8, productname: "xbox7", price: 20000 }

  // ]
  // const [count, setCount] = useState(0)
// console.log(productsdata)

  const filteredItems = productsdata.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))

// console.log("fitems",filteredItems)
  // Radio
  function handleChange(e){
    setSelectedCategory(e.target.value)
  }
  console.log(selectedCategory)
  // suggested

  function handleClick(e){
    setPriceRange(500)
    setSelectedCategory(e.target.value);
  }

  function handleRangeSelect(e){
    setSelectedCategory(e.target.value);
    setPriceRange(e.target.value)
  }

  function handlePick(product){
    let val= product;
    setPickedItems(prevItems => [...prevItems, product])
    console.log(val)
  }

  console.log(pickedItems)

  {console.log(selectedCategory)}

function handleOpenCart(){
  setShowCart(prev => !prev)
}
function handleClose(){
  setShowCart(false)
}


  function filteredData(products, selected, searchquery ){
      let filteredProducts = products;

    if(searchquery){
        filteredProducts = filteredItems;
        // console.log("sQuery", filteredProducts)
      }
    if(selected){
      filteredProducts = filteredProducts.filter((product)=>{ 
        return product.category == selected || Math.ceil(product.price) <= priceRange  || product.title == selected})
    }
  
      return filteredProducts.map((product,index)=> <ProductCard key={index} prod={product} addItem={handlePick}/>)

    }


    let result = filteredData(productsdata, selectedCategory, searchQuery);
    // console.log(result)

    function showAll(){
      setSelectedCategory(null)
    }

    let totalpickedItems = pickedItems.length;
  return (
    <>
       <nav className='p-4 flex items-center justify-between bg-[#8900fa]'>
        <div className='flex'>
        <FontAwesomeIcon icon={faGamepad} className='text-[#fff] text-4xl'/>
        <h4 className='font-bold m-0 text-4xl ms-2 text-[#fff]'>GamerWyre</h4>
        </div>

        <div className=''>
         <button onClick={handleOpenCart} className='flex items-center justify-between p-3 boder-0 hover:bg-white hover:text-[#5b21b6] rounded-full bg-[#5b21b6] text-white w-auto max-w-[12em]'>
          <FontAwesomeIcon icon={faShoppingCart}/> 
         <b className="bubble">{totalpickedItems}</b>
         </button>
         </div>
        </nav>
       
      <div className='flex'>

       <Sidebar handleChange={handleChange} handleClick={handleClick} handleRangeSelect={handleRangeSelect} priceRange={priceRange} handleShowAll={showAll}/>
       {console.log("price range :", priceRange)}
      <main className='p-8'>
      
      <Searchbar  handleInput={handelInput} searchquery={searchQuery} />

        <div className="flex gap-5 flex-wrap mx-auto">
            {result}
        </div>
        </main>
      </div>

    {showCart &&   <MyCart cartItems={pickedItems} handleClose={handleClose}/>}
    </>
  )
}

export default App;
