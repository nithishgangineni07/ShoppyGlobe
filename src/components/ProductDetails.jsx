import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate, useParams} from "react-router-dom";
import { AddCartItem} from "../utils/productSlice";

const ProductDetails = () => {

  const allProducts= useSelector((state)=>state.Products.fullItems);
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  //Find product based on id from url params
  const product= allProducts.find((item)=>item.id === Number(id));
  
  const handleAddToCart = ()=>{
    dispatch(AddCartItem(product))};

    if(!product){
      return (
        <div className='texxt-center mt-10 text-xl text-red-500'>Product not Found</div>
      )
    }

  return (
    <div className='min-h-screen px-4 py-8 bg-gary-50'>
      {/* BAck button */}
      <div>
        <button 
        onClick={()=>navigate('/products')}
        className='bg-orange-400 hover:bg-orange-600 text-white font-semibold shadow-md text-sm rounded-xl px-4 py-2 transition duration-300'>
         ⬅ GO BACK..!
        </button>
      </div>
      
      {/* Product card */}
      <div className='max-w-6xl bg-white mx-auto border border-gray-200 rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-10 transition-all duration-300'>
        {/* Product Image */}
        <div className=' flex items-center justify-center'>
          <img src={product.images?.[0]}
           alt={product.title} 
           className='w-full max-w-sm object-contain rounded-2xl  shadow-lg hover:scale-105 transistion duartion-300'/>
        </div>

      {/* Product Info */}
      <div className='flex-1 space-y-5'>
        <h1 className='font-extrabold text-pink-700 text-3xl md:text-left border-b-1 pb-2'>{product.title}</h1>


        <div className='text-lg gap-1 sapce-y-3 text-gray-700 md:text-left px-2'>
          <p><span className='text-orange-500 font-bold text-xl px-2'>Category:</span>{product.category}</p>
          <p><span className='text-orange-500 font-bold text-md px-2'>Description:</span>{product.description}</p>
          <p><span className='text-orange-500 font-bold text-md px-2'>Return Policy:</span>{product.returnPolicy}</p>
          <p><span className='text-orange-500 font-bold text-md px-2'>Shipping Info:</span>{product.shippingInfo}</p>
          <p><span className='text-orange-500 font-bold text-md px-2'>Stock:</span>{product.stock}</p>
          <p><span className='text-orange-500 font-bold text-md px-2'>Warranty:</span>{product.warrantyInformation || '1 year'}</p>
          <p><span className='text-orange-500 font-bold text-md px-2'>Brand:</span>{product.brand}</p>
          
        </div>

        {/* Price and Add to cart */}

        <div  className="flex items-center justify-between mt-6">
          <p className=' text-3xl font-bold text-yellow-500 '>${product.price}</p>
          <button
          onClick={()=>handleAddToCart}
          className='bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black hover:text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-95'>
            🛒Add to cart
          </button>
        </div>
      </div>

      </div>
      
    </div>
  )
}

export default ProductDetails
