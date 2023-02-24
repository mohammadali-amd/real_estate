import Link from 'next/link';
import Image from 'next/image';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '@/components/Property';

export default function Home({ propertyForSale }) {
  console.log(propertyForSale);
  return (
    <div className="flex flex-wrap">
      {
        propertyForSale.map((property) => <Property property={property} key={property.id} />)
      }
    </div>
  );
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12`);

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
    },
  };
};