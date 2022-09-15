import { useState,useEffect } from "react";
export const useFetch=(url)=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response=await fetch(url);
                const data=await response.json()
                setdata(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    },[url])
    return data

}
export default useFetch