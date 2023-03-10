import { baseUrl, fetchApi } from '../../utils/fetchApi';

const PropertyDetails = ({propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, purpose, amenities, photos, coverPhoto }}) => (
   <div className='grid grid-cols-2 mx-32 py-12'>
      <div className='flex items-start justify-center'>
         <img src={coverPhoto.url} className="w-4/5" alt={title} loading={'lazy'} />
      </div>
      <div className="px-6 pb-4">
         <h2 className="text-2xl font-bold">
            {title}
         </h2>
         <div className="text-sm font-light pt-3 pb-2">
            agency: {agency.name}
         </div>
         <div className="text-xl font-semibold mb-8">${price}</div>
         <p className='text-gray-600'>{description}</p>
         <h3 className='font-bold text-2xl pt-6 pb-2'>Amenities</h3>
         <div className='flex flex-wrap'>
            {amenities.map((item)=> (
               item.amenities.map((amenity)=> (
                  <p className='font-bold text-green-500 text-xs bg-gray-100 p-2 m-1 rounded-lg cursor-pointer' key={amenity.text}>
                     {amenity.text}
                  </p>
               ))
            ))}
         </div>
      </div>
   </div>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  
  return {
    props: {
      propertyDetails: data,
    },
  };
}