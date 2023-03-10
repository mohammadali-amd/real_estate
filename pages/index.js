import Link from 'next/link';
import Image from 'next/image';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '@/components/Property';
import SearchFilters from '@/components/SearchFilters';

export default function Home({ propertyForSale }) {
  // console.log(propertyForSale);
  
  return (
    <>
      <SearchFilters />
      
      <div className='flex flex-wrap justify-center'>
      {propertyForSale.map((property) => <Property property={property} key={property.id} />)}
      </div>

      {propertyForSale.length === 0 && (
        <div className="flex">
            <img src="" />
            <h4>No Result Found.</h4>
        </div>
      )}
    </>
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