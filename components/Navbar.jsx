import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import SearchFilters from './SearchFilters';

const Navbar = () => {
   const [nav, setNav] = useState(false);

   const handleNav = () => {
      setNav(nav => !nav);
   };

   const navStyle = 'p-4 border-b border-gray-600 flex justify-center'
   return (
      <div className='flex justify-between items-center h-24 mx-8 px-4 text-light'>
         <div className="hidden md:flex w-full justify-between item-center">
            <ul className='flex'>
               <li className='p-4'><span className='hover:cursor-pointer rounded-lg shadow-md px-4 py-2'>ثبت آگهی</span></li>
               <li className='p-4'><span className='hover:cursor-pointer'>پشتیبانی</span></li>
               <li className='p-4'><span className='hover:cursor-pointer'>ورود / ثبت نام</span></li>
            </ul>
            <input
               dir='rtl' 
               type="text" 
               placeholder='جستجو ...' 
               className='border border-gray-300 w-2/5 rounded-3xl px-8 my-1 focus:ring-gray-300 focus:border-gray-300'
            />
            <Link href='/' className='hidden md:block text-3xl font-bold text-black hover:cursor-pointer'>لوگو سایت</Link>
         </div>

         <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
         </div>
         <h1 className='block md:hidden text-3xl font-bold text-black hover:cursor-pointer'>لوگو سایت</h1>
         <div className={nav ? 'fixed right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed right-[-100%]'}>
            <Link href='/' className='flex justify-center text-3xl font-bold text-black mt-6'>لوگو سایت</Link>
            <ul className=''>
               <li className={`${navStyle} mt-12`}>ثبت آگهی</li>
               <li className={navStyle}>پشتیبانی</li>
               <li className={navStyle}>ورود / ثبت نام</li>
            </ul>
            <div className="ml-12 my-3">
               <SearchFilters />
            </div>
         </div>
      </div>
   );
};

export default Navbar;