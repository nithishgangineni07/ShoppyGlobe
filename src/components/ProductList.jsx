import React, { useEffect, useState } from 'react'
import useFetch from '../utils/useFetch';
import {useDispatch} from 'react-redux';
import {SetFullData} from "../utils/productSlice"
import ProductItem from './ProductItem';

const ProductList = () => {

  //local sates

  const [allProducts, setAllProducts]= useState([]);
  const [searchterm, setSearchTerm] = useState('');

  //fetch API using custom fetch hook

  const {data,error,loading} = useFetch('https://dummyjson.com/products');
  const dispatch = useDispatch();

  //on sucessful fetch populate the data

  useEffect(()=>{
    if(data){
      setAllProducts((data.products));
      dispatch(SetFullData(data.products));
    }

  },[data,dispatch])

  //Filter logic for serch items
  
  const filteredResults = allProducts.filter((product)=>
  product.title.toLowerCase().includes(searchterm.toLowerCase()))

  //show error if fetch fails

  if(error){

    return(
      <>
      <p className='text-center text-red-700 text-2xl font-bold mt-10'>Something went wrong: {error}</p>
      </>
    )

  }

  //show loading state

  if(loading){
    return(
      <div className='flex justify-center items-center'>
        <span className='text-lg text-center font-extrabold text-slate-700 animate-pulse'>Loading...</span>  
      </div>
    )
  }



  return (
    <div className='w-full flex  flex-col justify-center items-center mt-10 px-4'>
      {/* search field */}
      <div>
        <input type="text"
        placeholder='🔍 search for a item....' 
        value={searchterm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        className='w-full max-w-md border-2 border-orange-400 focus:border-orange-600 rounded-full focus:ring-4 focus:outline-none focus:ring-orange-400 px-6 py-3 text-lg transistion-all duration-300 shadow-md cursor-pointer placeholder:text-gray-400'/>
      </div>
      
      {/* products grid layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-10 mb-20 aniamte-fade-in'>
        {
          filteredResults.map((product)=>
          <ProductItem key={product.id} item={product} setText={setSearchTerm}></ProductItem>)
        }
        
      </div>
    </div>
  )
}

export default ProductList
