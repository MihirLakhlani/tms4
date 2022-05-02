import { Api_url } from "./Api_url"

const fetchAsJSON = async(
    url: string,
    options:any
  ) => {
    const response = await fetch(url, options)
    const json = await response.json()
    return json
  }
  

export const fetchData = (Url_end:string) => {
    
    return fetchAsJSON(`${Api_url}${Url_end}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
    })
  }




  export const PostData = (Url_end:string,data?:any) => {
    
    return fetchAsJSON(`${Api_url}${Url_end}`, {
      method: data?"POST":"GET",
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
