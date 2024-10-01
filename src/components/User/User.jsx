import React from "react"
import { useParams } from "react-router-dom"
export default function User(){
    const {userid}=useParams()
    return(
        <div className="text-center bg-gray-500 text-black rounded-md px-3 py-1 text-xl">user:{userid}</div>
    )
}