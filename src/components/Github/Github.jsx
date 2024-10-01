import { data } from "autoprefixer";
import React from "react";
import { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data = useLoaderData()
    // const [followers,setFollowers] = useState(0);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ashutosh1869')
    //     .then(res=>res.json())
    //     .then(data=>{
    //        setFollowers(data);
    //     }
    //     )
    // },[])
    return(
        <div className="text-center bg-gray-500 text-black rounded-md px-3 py-1 text-xl" >Github followers:{data.followers}
        <img className="w-20 rounded-full" src={data.avatar_url} alt="profile pics " /></div>
    )
}
export default Github
export const githubLoader = async()=>{
    const res = await fetch('https://api.github.com/users/ashutosh1869')
    return res.json()
    
}