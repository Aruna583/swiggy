import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategories = (props) => {
    const {title, itemCards} = props.data
    const [showItems, setShowItems] = useState(false);
  return (
    <div>
        <div className='w-5/6 bg-red-100 shadow-lg p-4 my-4 rounded-md'>
            <div className='flex justify-between cursor-pointer'  onClick={() => setShowItems(!showItems)}>
            <span className='text-lg font-bold'>{title} ({itemCards?.length})</span>
            <span className='cursor-pointer'>⬇️</span>
            </div>
            {showItems && <ItemList items={itemCards}/>}
        </div>
        
    </div>
  )
}

export default RestaurantCategories