import Link from 'next/link';
import Image from 'next/image';

const Property = ({ property: { coverPhoto, price, rooms, area, title, agency, externalID } }) => {
   console.log(coverPhoto.url);
   return (
      <div className="md:max-w-xs w-full rounded-lg overflow-hidden shadow-lg m-4">
         <Link href={`/property/${externalID}`} passHref>
            <img src={coverPhoto.url} className="h-60 w-full" alt={title} loading={'lazy'} />
            <div className="px-6 py-4">
               <h2 className="text-lg font-bold">
                  {title.length > 50 ? title.substring(0, 45) + ' ...' : title}
               </h2>
               <div className="text-sm font-light pt-3 pb-2">
                  agency: {agency.name.length > 35 ? agency.name.substring(0, 25) + ' ...' : agency.name}
               </div>
               <span className="text-sm font-semibold">${price}</span>
            </div>
         </Link >
      </div>
   );
};

export default Property;