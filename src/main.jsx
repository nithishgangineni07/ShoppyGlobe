import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { ToastContainer, Slide } from 'react-toastify';
import AppStore from "./utils/appStore.js";

//lazy import

const App= lazy(()=>import('./App.jsx'));
const Body= lazy(()=>import('./components/Body.jsx'));
const ProductList= lazy(()=>import('./components/ProductList.jsx'));
const Cart= lazy(()=>import('./components/Cart.jsx'));
const Checkout= lazy(()=>import('./components/Checkout.jsx'))
const NotFound= lazy(()=>import('./components/NotFound.jsx'));
const ProductDetails = lazy(() => import("./Components/ProductDetails"))


//reusesable  loader

const loader=  <div className='flex justify-center items-center'>
        <span className='text-lg text-center font-extrabold text-slate-700 animate-pulse'>Loading...</span>  
      </div>


const router= createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Body></Body>,
      },
      {
        path:"/products",
        element:<ProductList></ProductList>,
      },
      {
        path:"/products/:id",
        element:<ProductDetails></ProductDetails>
      },
      {
        path:"/cartitems",
        element:<Cart></Cart>,
      },
      {
        path:"/checkout",
        element:<Checkout></Checkout>,
      }
    ]
  },
  {
    path:"*",
    element:<NotFound></NotFound>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={AppStore}>
      <Suspense fallback={loader}>
         <RouterProvider router={router}/>
      </Suspense>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        transition={Slide}
      /></Provider>
  </StrictMode>,
)
