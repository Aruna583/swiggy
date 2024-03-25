import React, {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { RESTARUNT_API } from '../utils/constants';

const Restaurants = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams()
    console.log("resId", resId)
    // console.log("resInfo",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async()=>{
        const data = await fetch(RESTARUNT_API+resId);
        const response = await data.json();
        setResInfo(response.data)
    }

    if(resInfo === null) return <Shimmer/>

    const {name, cuisines} = resInfo?.cards[0]?.card?.card?.info
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  return (
    <div className='p-4'>
        <h1 className='text-xl font-bold h-10'>{name}</h1>
        {/* <img src={cloudinaryImageId} alt={name}/> */}
        <h2>{cuisines.join(", ")}</h2>
        <h2 className='font-bold'>Menu</h2>
        <ul className='text-sm pl-4 pt-3'>
            {itemCards.map(item => (<li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price || item.card.info.defaultPrice }</li>))}
            {/* {itemCards.map((item) => 
                // const {name} = item.card.info
                (<li>{item.card.info.name}</li>)
            )} */}
            {/* <li>{costForTwoMessage}</li>
            <li>{totalRatingsString}</li>
            <li>{city}</li>
            <li>{locality}</li> */}
        </ul>
    </div>
  )
}

export default Restaurants