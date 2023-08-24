'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const page = ({params}) => {
   const{search}=params;
    console.log(params);


  const[data,setData]=useState([]);

    const searchTerm= async ()=>{

        try{
        
        const res= await fetch(`https://restcountries.com/v3.1/name/${search}`);
        const data=await res.json();
        console.log(data);
        setData(data);

        }
        catch(error){
            console.log('Error: ', error)
        }   
    }


    useEffect(()=>{
        searchTerm();
    },[search]);

    console.log(data);

    return (
        <>
         <section className='bg-slate-800 w-full  overflow-hidden  scroll-smooth h-screen'> 

        <div className='px-5 w-full sm:px-0 sm:w-[80%] my-20   mx-auto'>

            <h1 className='mb-5 text-white  text-xl'>You Searched for {search}  </h1>

            <div className=' grid grid-cols-1 sm:grid-cols-4 gap-10 py-20'>

            {   
            data.map((item)=>

            <section  className='grid'>
            <div key={item.name.common} className='w-full shadox-5xl bg-slate-700 text-white'>

            <Image
            src={item.flags.png}
            alt={item.name.common}
            width={300}
            height={200}
            priority
            className='mb-10  object-cover'
            />
            <div className='w-full p-6 '>
            <h1 className='text-2xl font-bold  mb-3'>Name:{" "}{item.name.common}</h1>
            <h1 className='text-xl font-bold mb-3' >Capital:{" "} {item.capital}</h1>           
            <h1 className='text-xl  font-bold mb-3' >Region:{" "}{item.region}</h1>
            <Link href={`/countries/${item.name.common}`}><button className='text-lg px-3 py-2 bg-green-600 mb-2'>Show Details</button></Link>
            
            </div>


            </div>
            </section>    
                
                
                )

                
            } 


            </div>
            </div>
    </section>
        </>
    );
};

export default page;