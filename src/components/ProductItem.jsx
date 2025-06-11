import React from 'react'
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import { AddCartItem} from '../utils/productSlice';


const ProductItem = ({item}) => {

  const dispatch= useDispatch();
  const Products = useSelector((state)=> state.Products.items);

  return (
    <div className='bg-white border border-gray-200 shadow-lg hover:shadow-xl rounded-2xl flex flex-col transform hover:scale-[1.02] transition duration-300 ease-in-out'>
      {/* Product Image */}
      <img src={item.images?.[0] || '/placeholder.png'} 
      alt={item.title || 'product image'}  
      className='w-full rounded-t-2xl h-60 object-contain'/>

      {/* Product Info */}
      <div className='p-4 flex flex-col justify-between flex-grow'>
        <h2 className='text-xl font-semibold  text-gray-950 text-center pb-1 mb-1 border-b-2 border-gray-300'>{item.title}</h2>
        <p className='text-sm text-gray-600 text-center mb-2 line-clamp-2'>{item.description}</p>

        <div className='flex justify-between items-center mt-auto'>
          {/* Price and rating */}
          <div className='flex flex-col text-left'>
            <p className='text-yellow-500 font-extrabold text-xl mt-1.5'>${item.price}</p>
            <p className='text-md text-gray-600 mt-1.5'>{item.rating}⭐</p>
          </div>



          {/* Action Button */}
          <NavLink to={`/products/${item.id}`}>
          <button className='bg-blue-500 rounded-2xl px-2 py-1 text-white text-md hover:bg-orange-400 hover:shadow-2xl'>View Details</button>          
          </NavLink>
        </div>

        {/* Add tyo cart Button */}
        <button onClick={()=>dispatch(AddCartItem(item))}
          className=' bg-emerald-500 rounded-full text-white text-lg font-semibold mt-2 hover:bg-emerald-600 shadow-md'>
            Add to Cart
        </button>
      </div>
      
    </div>
  )
}

export default ProductItem
