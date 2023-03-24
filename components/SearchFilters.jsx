import { useState } from 'react';
import { useRouter } from 'next/router';

import { filterData, getFilterValues } from '../utils/filterData';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
         {filters.map((filter) => (
            <Accordion key={filter.queryName}>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${filter.queryName}-content`}
                  id={`${filter.queryName}-header`}
               >
                  <Typography>{filter.placeholder}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <select 
                     name={filter.queryName} 
                     id={filter.queryName}
                     onChange={(e)=> searchProperties({ [filter.queryName]: e.target.value })}
                     className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500'
                  >
                     {filter?.items?.map((item)=>(
                        <option key={item.value} value={item.value}>
                           {item.name} &#xf044;
                        </option>
                     ))}
                  </select>
               </AccordionDetails>
            </Accordion>
         ))}
      </>
   );
};

export default SearchFilters;