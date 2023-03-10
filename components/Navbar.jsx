import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
   const [nav, setNav] = useState(false);

   const handleNav = () => {
      setNav(nav => !nav);
   };

   return (
      <div className='flex justify-between items-center h-24 mx-8 px-4 text-light'>
         <ul className='hidden md:flex'>
            <li className='p-4'><span className='hover:cursor-pointer rounded-lg shadow-lg px-4 py-2'>ثبت آگهی</span></li>
            <li className='p-4'><span className='hover:cursor-pointer'>پشتیبانی</span></li>
            <li className='p-4'><span className='hover:cursor-pointer'>درباره ما</span></li>
         </ul>
         <Link href='/' className='hidden md:block text-3xl font-bold text-black hover:cursor-pointer'>لوگو سایت</Link>

         <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
         </div>
         <h1 className='block md:hidden text-3xl font-bold text-black hover:cursor-pointer'>لوگو سایت</h1>
         <ul className={nav ? 'fixed right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed right-[-100%]'}>
            <Link href='/' className='w-full text-3xl font-bold text-black m-4'>لوگو سایت</Link>
            <li className='p-4 border-b border-gray-600'>ثبت آگهی</li>
            <li className='p-4 border-b border-gray-600'>پشتیبانی</li>
            <li className='p-4 border-b border-gray-600'>درباره ما</li>
         </ul>
      </div>
   );
};

export default Navbar;