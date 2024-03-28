import {useState, useEffect} from "react";

import { RESTARUNT_API } from "./constants";


const useRestaurantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async()=>{
        const data = await fetch(RESTARUNT_API+resId);
        const response = await data.json();
        setResInfo(response.data)
    }

    return resInfo;

}

export default useRestaurantMenu
