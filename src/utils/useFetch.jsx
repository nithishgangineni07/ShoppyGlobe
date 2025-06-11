import { useState, useEffect } from "react";
import React from "react";

//custom hook fetch dat from given end point
 const useFetch=(endpoint)=>{
 //state to store fetched data
    const [responseData, setResponseData] = useState(null);
 //state to store errors caused during data fetching
    const [fetchError, setFetchError] = useState(null);
 //state to hold vale of loading status
    const [isLoading,setIsLoading] = useState(true);

   useEffect(()=>{
    
    // This flag prevents setting state after component unmount
     let ignore= false;

     //async function to fetch data

     const fetchData = async ()=>{

        setIsLoading(true) //start loading

        try{
            const res = await fetch(endpoint); //fetch from api

            if(!res.ok) throw new Error(`HTTP Error : Status ${res.status}`); //If there is any error during fetching data throw error manually 

            const json = await res.json();// Parse the data

            if(!ignore) setResponseData(json); //setresponsedata if there is no error
        }

        catch(err){
            if(!ignore) setFetchError(`Something went wrong ` || err.data)
        }

        finally{
           if(!ignore) setIsLoading(false)
        }
     };

     //call the fetch function

     fetchData();

     //cleanup  function to set ignore flag if component unmounts

     return()=>{
        ignore=true
     }

   },[endpoint])//re-run when enpoint changes
   
   //export all three states
   return{data:responseData, error:fetchError, loading:isLoading}
 }

 export default useFetch;