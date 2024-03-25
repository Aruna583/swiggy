import React, { useEffect, useState } from 'react'
// import { restaurantList } from '../utils/constants';
import RestaurantCard from './RestaurantCard';
// import { MENU_API } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
    const [listOfRestarunts, setListOfRestaurants] = useState([]);
    const [filteredRestaruntas, setFilteredRestaruntas] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const reponse = await data.json();
        // console.log("response", reponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info.id);
        setListOfRestaurants(reponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaruntas(reponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

//Conditional rendering
    // if(listOfRestarunts.length === 0 ){
    //     return <Shimmer/>
    // }

  return listOfRestarunts.length === 0 ? (<Shimmer/>) : (
    <div>
        <div className='p-2'>
            <button className='rounded-md p-2 text-center mt-4 bg-violet-400 text-white'
            onClick={() => {
                // console.log(listOfRestarunts.filter(res => res.info.avgRating >= 4.5))
                const filteredList = listOfRestarunts.filter(res => res.info.avgRating >= 4.5)
                setFilteredRestaruntas(filteredList)
            }}
            >
                Top Rated Restaurants
            </button>
        </div>
        <div className='flex flex-row justify-around flex-wrap'>
            {filteredRestaruntas.map((restaurant) =>  (
                <Link 
                key={restaurant.id}
                to={'/restaurants/'+restaurant.info.id}
                >
                    <RestaurantCard resData={restaurant} />
                </Link>
                )
            )}
        </div>
    </div>
  )
}

export default Body