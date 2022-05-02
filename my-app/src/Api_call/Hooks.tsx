import * as service from '../Api_call/Api_call'
import React from 'react'

export const useAllTasks = (Url:any): {
  tasks: any[]
  fetchData: () => Promise<void>
} => {
  const [tasks, setTasks] = React.useState<any[]>([])
  const fetchData = async () => {
    const response: any[] = await service.fetchData(Url)
    setTasks(response)    
    console.log(response);
  }

  return {
    tasks,
    fetchData,
  }
}



export const useDataOfFilter = (Url:string,Data?:any): {
  tasks1: any[]
  fetchData1: () => Promise<void>
} => {  
  const [tasks1, setTasks1] = React.useState<any[]>([])
  const fetchData1 = async () => {
    const response: any[] = await service.PostData(Url,Data)
    setTasks1(response)    
  }

  return {
    tasks1,
    fetchData1,
  }
}