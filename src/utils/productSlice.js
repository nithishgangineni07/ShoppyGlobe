import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-toastify"

const initialState ={
    fullItems : [],
    items : [],

};

const productSlice = createSlice({

    name:"Products",
    initialState,
    reducers: {
    
    //sets the complete list of products
     SetFullData:(state,action)=>{
        state.fullItems = action.payload;

     },
    //Adds items to the cart or updates the items in the cart

    AddCartItem:(state,action)=>{

        const itemId= state.items.find((item)=>item.uid === action.payload.id);
        const data = {...action.payload , quantity:1};

        if(!itemId){
            //if item desnot exist in the cart
            state.items.push(data);
            toast.success("Item aded to the cart");

        }else if(itemId.minimumOderQuantity>1){
            //If in stock incraese quantity

            itemId.qunatity++;
            itemId.minimumOderQuantity--;
            toast("product aded to the cart");
        }else if(itemId.minimumOderQuantity===0){
            //if item is out of stock
            toast("Out of stock");
        }
    },
 
     //removes one item from the cart or deletes whole item 
     
     RemoveCartItem : (state,action)=>{

        const itemid = state.items.find((item)=>item.id === action.payload.id);

        if(itemId.qunatity <= 1){
         //Remove item quantity 1
         state.items = state.items.filter((item)=>item.id !== itemId.id);
        }else{
            //Decrease item quantity in the cart

            itemId.quantity--;
            itemId.minimumOderQuantity++;
            toast("Item removed from the cart");
        }
     },

     DeleteCartItem : (state,action)=>{

        const itemId = state.items.find((item)=>item.id === action.payload.id);
        state.items = state.items.filter((item)=>item.id !== itemId.id);

        toast.success("Item removed from cart");

     },

     //clears the entire cart

     clearCartItem : (satte,action)=>{
        state.items.length === 0;
     },
    },
});

export const{
    SetFullData,
    AddCartItem,
    RemoveCartItem,
    DeleteCartItem,
    clearCartItem,
}= productSlice.actions;

export default productSlice.reducer;