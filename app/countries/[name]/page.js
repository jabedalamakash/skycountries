"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const page = ({params}) => {

    const{name}=params;
    const[countryData,setCountryData]=useState([]);
   

        const country= async ()=>{

        try{
        
        const res= await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data=await res.json();
        setCountryData(data);

        }
        catch(error){
            console.log('Error: ', error)
        }
        
    }



    // console.log(countryData);


    useEffect(()=>{
        country();
    },[name]);


    return (
        <>
        <section className='bg-slate-800 w-full  overflow-hidden  scroll-smooth h-screen'>



        

        <div className='px-5 w-full sm:px-0 sm:w-[80%] my-20    mx-auto'>

        <Link href="/">
                <button className='bg-green-600 px-5 mb-10 font-bold text-white  py-3'>Back</button>
            </Link>

           
        
           {   
            countryData.map((item)=>
            
            <div key={item.name.common} className='w-full h-full rounded-md md:px-10 md:py-10  box-border shadox-5xl bg-slate-700 text-white'>


            <div className='w-full p-6 '>
            <h1 className='text-5xl font-bold border-b mb-10 py-5'>{item.name.common}</h1>
            <Image
            src={item.flags.png}
            alt={item.name.common}
            width={300}
            height={200}
            priority
            className='mb-10 '
            />
            <h1 className='text-2xl font-bold  mb-3'>Official Name:{" "}{item.name.official}</h1>

            <h1 className='text-xl font-bold mb-3' >Capital:{" "} {item.capital[0]}</h1>
            <h1 className='text-xl font-bold mb-3' >Area:{" "} {item.area}</h1>
            
            <h1 className='text-xl font-bold mb-3' >Population:{" "} {item.population}</h1>
            <h1 className='text-xl font-bold mb-3' >TimeZones:{" "} {item.timezones}</h1>
            <h1 className='text-xl  font-bold mb-3' >Region:{" "}{item.region}</h1> 
            <h1  className='text-xl  font-bold mb-3' >Google Map Location:{" "}<Link className="text-green-600" href={`${item.maps.googleMaps}`}>Click here</Link></h1>
            {/* <h1 className='text-xl  font-bold mb-3' > Loaction:{" "}{`${item.maps.googleMaps}`}</h1>  */}
            

            
            
            </div>


            </div>    
                
                
                )

                
            } 

        </div>
        </section>
        </>
    );
};

export default page;