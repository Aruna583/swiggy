import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const ItemList = ({items}) => {
    console.log('item', items)
  return (
    <div>
        {items.map((item) => (
            <div key={item?.card?.info?.id} className='text-left p-2 m-2 border border-red-300 rounded-md border-b-2 flex'>
                <img 
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                className='w-14 rounded-md'
                />
                <div className='p-1'>
                <div className='p-1'>
                    <span>{item.card.info.name}</span>
                    <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultprice/100}</span>
                </div>
                <p className='text-xs p-1'>{item.card.info.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList