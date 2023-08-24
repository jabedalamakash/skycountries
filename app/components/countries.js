"use client"

import React, { useEffect, useState } from 'react';
import Country from "@/app/components/Country";



const Countries = () => {
    const[rest,setRest]=useState([]);
    const[isLoading,setIsLoading]=useState(true);




    

    

    const country= async ()=>{

        try{
        // const url="https://restcountries.com/v3.1/all"
        const res= await fetch(`https://restcountries.com/v3.1/all`);
        const data=await res.json();
        // console.log(data);
        setRest(data);
        setIsLoading(false);

        }
        catch(error){
            console.log('Error: ', error)
        }
        
    }





    useEffect(()=>{
        country();
    },[]);







    return (
        <>
         <section className='bg-slate-800 w-full h-full '>

           

    <div className='px-5 w-full sm:px-0 sm:w-[80%] h-full  mx-auto'>


         
            {isLoading? <h1 className=' p-5 mx-auto flex items-center justify-center h-full text-5xl text-white'>Loading</h1>:
            <Country country={rest}/>
            }


        </div>
           

 
        </section>
              
        </>
       
    );
};

export default Countries;