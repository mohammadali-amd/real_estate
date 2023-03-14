import { useState } from 'react';
import { useRouter } from 'next/router';

import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
   const [filters] = useState(filterData);
   const router = useRouter();

   const searchProperties = (filterValues) => {
      const path = router.pathname;
      const { query } = router;

      const values = getFilterValues(filterValues);

      values.forEach((item) => {
         if(item.value && filterValues?.[item.name]) {
           query[item.name] = item.value
         }
      })

      router.push({ pathname: path, query})
   }

   return (
      <>
         {filters?.map((filter)=> (
            <label htmlFor={filter.queryName} key={filter.queryName} className='block mb-2 mr-12 text-sm font-medium text-gray-900'>
               <select 
                  name={filter.queryName} 
                  id={filter.queryName}
                  onChange={(e)=> searchProperties({ [filter.queryName]: e.target.value })}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500'
               >
                  {filter?.items?.map((item)=>(
                     <option key={item.value} value={item.value}>{item.name}</option>
                  ))}
               </select>
            </label>
         ))}
      </>
   );
};

export default SearchFilters;