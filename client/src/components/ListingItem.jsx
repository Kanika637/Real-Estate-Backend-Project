import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md';

export default function ListingIndex({listing}) {
  return (
    <div className='bg-slate-50 shadow-md hover:shadow-lg
     transition overflow-hidden rounded-lg w-full sm:w-[330px]'>
   <Link to={`/listing/${listing._id}`}>
    <img src={listing.imageURLs[0] || "data:image/jpeg;base64,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"} alt='listing-cover' 
    className='h-[320px] sm:h-[220px] w-full object-cover 
    hover:scale-105 transition-scale duration-300'>
    </img>

    <div className='p-3 flex flex-col gap-2 w-full'>
       <p className='truncate text-lg font-semibold text-slate-700'>{listing.name} 
       </p>
       <div className='flex items-center gap-1'>
        <MdLocationOn className='h-4 w-4 text-green-700'/> 
        <p className='text-sm text-gray-600 truncate w-full'> 
        {listing.address}
        </p></div>

        <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p>

          <p className='text-slate-500 mt-2 font-semibold '>
            
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
              : listing.regularPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
            {listing.type === 'rent' && ' / month'}
          </p>

          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className='font-bold text-xs'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
        </div>
        </div>
   </Link>
   
   </div>
  )
}
