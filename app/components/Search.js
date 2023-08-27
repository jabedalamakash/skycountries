"use client"

import React, { useState } from 'react';

import { useRouter } from 'next/navigation'


const Search = () => {

    const[search,setSearch]=useState();
    const router=useRouter();


    







    const handleChange =(e)=>{
        setSearch(e.target.value);
    }

    const handleClick=(e)=>{
        e.preventDefault();
        setSearch(" ");
        router.push(`/search/${search}`)

       
    }

    return (
        <>
            <div className='w-full flex '>


                <input className='p-5 block rounded-lg w-full mr-3 ' required onChange={handleChange} type="text" value={search} placeholder='Search a Country'/>
                <button onClick={handleClick} className='rounded-lg text-white bg-green-600 p-5'>Search</button>

            </div>
            
        </>
    );
};

export default Search;