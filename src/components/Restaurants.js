import React from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategories from './RestaurantCategories';

const Restaurants = () => {
    
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>

    const {name, cuisines} = resInfo?.cards[2]?.card?.card?.info
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log("categories", categories)
  return (
    <div className='p-4 flex flex-col justify-center'>
        <h1 className='text-xl font-bold h-10 my-4'>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        {itemCards && (<h2 className='font-bold'>Menu</h2>) }

        {categories.map((category) => (<RestaurantCategories data={category?.card?.card}/>))}



        <ul className='text-sm pl-4 pt-3'>
            {itemCards?.map(item => (
            <li key={item.card.info.id}>
              {item?.card?.info?.name} - {item.card.info.price || item.card.info.defaultPrice }
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Restaurants