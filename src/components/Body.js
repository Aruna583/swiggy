import React, { useEffect, useState } from 'react';
import RestaurantCard, {withPromotedLabel} from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [listOfRestarunts, setListOfRestaurants] = useState([]);
    const [filteredRestaruntas, setFilteredRestaruntas] = useState([]);

    const [searchText, setSearchText] = useState('');

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

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

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
    return (<h1>Look's like you are offline....</h1>)

  return listOfRestarunts.length === 0 ? (<Shimmer/>) : (
    <div>
        <div className='p-2 flex flex-row justify-between'>
            <div>
            <input 
            type="text" 
            value={searchText} 
            onChange={(e) =>setSearchText(e.target.value)}
            className='p-1.5 border border-bg-2 m-0.5 rounded-md'
            />
            <button className='rounded-md p-2 text-center mt-4 bg-violet-400 text-white'
            onClick={() => {
                 const serachValues = listOfRestarunts.filter((res) => 
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
                setFilteredRestaruntas(serachValues)
            }}
            >
                Search
            </button>
            </div>
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
        <h1>OnlineStatus: {onlineStatus ? "yes" : "No"}</h1>
        <div className='flex flex-row justify-around flex-wrap'>
            {filteredRestaruntas.map((restaurant) =>  (
                <Link 
                key={restaurant.id}
                to={'/restaurants/'+restaurant.info.id}
                >
                    {restaurant.info.promoted ? (
                        <RestaurantCardPromoted resData={restaurant}/>
                    ): (
                        <RestaurantCard resData={restaurant} />
                    )}
                </Link>
                )
            )}
        </div>
    </div>
  )
}

export default Body