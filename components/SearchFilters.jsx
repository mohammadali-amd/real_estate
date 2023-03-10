import { useState, useEffect } from 'react';
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
      <div className='justify-center'>
         {filters?.map((filter)=> (
            <label htmlFor={filter.queryName} key={filter.queryName}>
               <select 
                  name={filter.queryName} 
                  id={filter.queryName}
                  onChange={(e)=> searchProperties({ [filter.queryName]: e.target.value })}
               >
                  {filter?.items?.map((item)=>(
                     <option key={item.value} value={item.value}>{item.name}</option>
                  ))}
               </select>
            </label>
         ))}
      </div>
   );
};

export default SearchFilters;