import React, { useEffect } from "react";
import { BASE_URL } from "../constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import ProfileCard from "../lib-components/profileCard";


const Feed = () => {
    const feed = useSelector((store)=> store.feed)
    const dispatch = useDispatch()

    const getFeed = async() =>{

        try{
        if (feed && feed.length > 0) return;
        const feedRes = await axios.get(BASE_URL + "/feed", {withCredentials:true})
        dispatch(addFeed(feedRes.data))
        }
        catch(e){
            console.error(e);
        }

    }


    useEffect(()=>{
        getFeed()
    },[])


    return (
        <>
      {feed.map((item, index) => (
  <ProfileCard key={index} user={item} />
))}
        </>
    )
}

export default Feed