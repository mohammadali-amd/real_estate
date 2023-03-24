import Link from 'next/link';
import Image from 'next/image';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '@/components/Property';
import SearchFilters from '@/components/SearchFilters';

export default function Home({ propertyForSale }) {
  // console.log(propertyForSale);
  
  return (
    <div className='grid md:grid-cols-4 mx-12 gap-6'>
      
      <div className='flex flex-wrap justify-center md:col-span-3'>
      {propertyForSale.map((property) => <Property property={property} key={property.id} />)}
      </div>

      {propertyForSale.length === 0 && (
        <div className="flex">
            <Image src="" alt="not-found" />
            <h4>No Result Found.</h4>
        </div>
      )}

      <div className='md:col-span-1 hidden md:block mt-4'>
        <SearchFilters />
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
     props: {
      propertyForSale: data?.hits,
     },
  };
}