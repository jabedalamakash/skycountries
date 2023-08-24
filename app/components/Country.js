"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';




const country = ({country}) => {
    const[value,setValue] = useState(40);
   

    const handleClick=()=>{
        setValue(value+40);
    }





    return (

        <div className='w-full' >

         


        <div className=' grid grid-cols-1 sm:grid-cols-4 gap-10 py-20'>

         

        

         {   
            country.slice(0,value).map((item)=>
            <div key={item.name.common} className='w-full shadox-5xl bg-slate-700 text-white'>

            <Image
            src={item.flags.png}
            alt={item.name.common}
            width={300}
            height={200}
            priority
            className='mb-10 w-full object-cover'
            />
            <div className='w-full p-6 '>
            <h1 className='text-2xl font-bold  mb-3'>Name:{" "}{item.name.common}</h1>
            <h1 className='text-xl font-bold mb-3' >Capital:{" "} {item.capital}</h1>           
            <h1 className='text-xl  font-bold mb-3' >Region:{" "}{item.region}</h1>
            <Link href={`/countries/${item.name.common}`}><button className='text-lg px-3 py-2 font-bold rounded-lg bg-green-600 mb-2'>Show Details</button></Link>
            
            </div>


            </div>    
                
                
                )

                
            } 


            
  

        


           

        </div>
        <button className='px-3 py-5 w-full mx-auto text-center bg-green-600 my-20 text-white' onClick={handleClick}>Show more</button>
            
        </div>
    );
 }
    
export default country;