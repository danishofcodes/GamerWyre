
import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Searchbar from './components/Searchbar'
import { productsdata } from './db/dummydata'
import Sidebar from './components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faGamepad, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MyCart from './components/MyCart'
import Loader from './components/Loader'
function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState(500);

  // Added items in Cart
  const [pickedItems, setPickedItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  
  //Doubly Added Product 
  const [isDoublyAdded, setIsDoublyAdded] = useState(false);

  const [loadingState, setLoadingState] = useState(false);
  const [filteredItems, setFilteredItems] = useState('')
  
  const [showFilter, setShowFilter] = useState(false);

  function handelInput(e) {
    setLoadingState(true)
    setPriceRange(500)

    setSearchQuery(e.target.value);
    setFilteredItems(productsdata.filter(product => (product.title.toLowerCase().includes(searchQuery.toLowerCase())) || (product.company.toLowerCase().includes(searchQuery.toLowerCase()))))
    // This is just to simulate loading State, in real life situation we would have a backend where we will have to fetch out products which is an async operation,
    //  for which we will use try catch and promise,
    //  and use loader to let users know the products is being queried 
    setTimeout(() => {
      setLoadingState(false)
    }, 1000)
  }

  //Radio
  function handleChange(e) {
    setSelectedCategory(e.target.value)
  }
  console.log(selectedCategory)
  // suggested

  function handleClick(e) {
    setPriceRange(500)
    setSelectedCategory(e.target.value);
  }

  function handleRangeSelect(e) {
    setSelectedCategory(e.target.value);
    setPriceRange(e.target.value)
  }

  // Handling Add To cart
  function handlePick(product) {
    const doublyadded = pickedItems.some((item) => item.id === product.id);
    if (!doublyadded) {
      setIsDoublyAdded(false);
      setPickedItems(prevItems => [...prevItems, product]);
    }else{
          alert(product.title + " is already Added in Cart, View Cart for details")
      }
  }

  // Open/Close cart

  function handleOpenCart() {
    setShowCart(prev => !prev)
  }
  function handleClose() {
    setShowCart(false)
  }

// Filter Products
  function filteredData(products, selected, searchquery) {
    let filteredProducts = products;

    if (searchquery) {
      filteredProducts = filteredItems;
      // console.log("sQuery", filteredProducts)
    }
    if (selected) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.category === selected || Math.ceil(product.price) <= priceRange || product.title === selected
      })
    }

    return filteredProducts.map((product, index) => <ProductCard key={index} prod={product} addItem={handlePick} />)

  }


  let result = filteredData(productsdata, selectedCategory, searchQuery);
  // console.log(result)

  function showAll() {
    setSelectedCategory(null)
  }

// Rmeove Product from Cart 
  function removeFromCart(product){
    const updatedCart = pickedItems.filter((item) => item.id !== product.id); // Filter items with ID not matching
  setPickedItems(updatedCart); 
  console.log("removed", updatedCart);
  }

// Show Hide Filters in sideNav
  function handleFilters(){
    setShowFilter(prev=> !prev);
    if(window.innerWidth <= 883){
    document.body.classList.toggle('disable-scroll');
  }
  }

  // Total Added Items Calc
  let totalpickedItems = pickedItems.length;

  // For No. Of Search Results
  let totalresults = result.length;

  
  return (
    <>
      <nav className='p-2 flex items-center justify-between bg-[#7532fa]'>
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faGamepad} className='text-[#fff] text-4xl' />
          <h4 className='font-bold m-0 text-xl ms-2 text-[#fff]'>GamerWyre</h4>
        </div>

        <div className='flex '>
          <button onClick={handleFilters} className={showFilter ? 'me-2 bg-[#ffffff] text-[#5b21b6] px-3 rounded-full font-bold' : 'me-2 bg-[#5b21b6] text-white px-3 rounded-full font-bold'}><FontAwesomeIcon icon={faFilter}/> Filters</button>
          <button onClick={handleOpenCart} className='flex items-center justify-between p-3 boder-0 hover:bg-white hover:text-[#5b21b6] rounded-full bg-[#5b21b6] text-white w-auto max-w-[12em]'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <b className="bubble">{totalpickedItems}</b>
          </button>
        </div>
      </nav>

      <div  className='flex actions'>
       {showFilter && <Sidebar handleChange={handleChange} handleClick={handleClick} handleRangeSelect={handleRangeSelect} priceRange={priceRange} handleShowAll={showAll} /> } 
       {console.log("price range :", priceRange)}
        <main className='p-8'>

          <Searchbar handleInput={handelInput} searchquery={searchQuery} />
            
            { loadingState ? <Loader /> :
                <>
                  <div className='text-start mb-2'> {result.length > 0 ? `Found ${totalresults} results` : 'No results found'}</div>
                  <div className="flex gap-5 justify-between flex-wrap mx-auto">
                    {result}
                  </div>
                </>
            }
        </main>
      </div>

      {showCart && <MyCart cartItems={pickedItems} handleClose={handleClose} removeFromCart={removeFromCart}/>}
    </>
  )
}

export default App;
