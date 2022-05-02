/* eslint-disable @typescript-eslint/no-unused-vars */
import { Api_url } from "./Api_url"

export const handleFilter=async(Filter_url:any)=>{
    const response = await fetch(`${Api_url}${Filter_url}`)
    const json = await response.json()
}