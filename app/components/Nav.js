import React from 'react';
import Search from './Search';
import Link from 'next/link';


const Nav = () => {
    return (
        <section  className='bg-slate-800 sticky top-0 w-full  shadow-lg z-10  '>

        <div className='w-full sm:w-[80%] px-5 sm:px-0 mx-auto flex flex-col sm:flex-row py-10 sm:py-0 justify-between items-center '>

            <div className=''>
                <Link href="/"><h1 className='text-center   text-white font-bold py-10 text-5xl'>Sky Countries</h1></Link>
            
            </div>
            <div className=''>
                <Search/>
            </div>
             
            
        </div>

        </section>
    );
};

export default Nav;