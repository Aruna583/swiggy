import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    // console.log("data", props.resData.info)
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo, sla}  = props?.resData?.info;
  return (
    <div className='h-300 w-48 p-2 bg-red-200 hover:border hover:border-red-500 hover:shadow-md mt-2 rounded-xl cursor-pointer hover:bg-violet-300 hover:shadow-xl flex flex-col justify-evenly'>
        <img alt="res-logo" src={IMG_CDN_URL + cloudinaryImageId} className='h-40 w-60 rounded-xl'/>
        <div className='p-2'>
        <h3 className='font-bold'>{name}</h3>
        <h4 className='text-sm font-bold'>{cuisines.join(", ")}</h4>
    
        <h4 className='font-bold'>{costForTwo}</h4>
        <h4 className='text-lg font-bold'>{sla.deliveryTime} minutes</h4>
        <h4 className='bg-green-500 rounded-md text-white text-center'>{avgRating}stars</h4>
        </div>
    </div>
  )
}

export default RestaurantCard