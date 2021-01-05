
import axios from 'axios'
import {API_URL} from '../utils/api'

export const fetchEvents =()=>{

 axios.get(`${API_URL}/events`).then(response=>{
        return response.data.data;
     }).catch(error=>{
  
     });
}

export const fetchStands =() =>{
    axios.get(`${API_URL}/stands`).then(response=>{
        return response.data.data;
       
     }).catch(error=>{
  
     })
}

export const fetchInformation =()=>{
    axios.get(`${API_URL}/informations`).then(response=>{
        return response.data.data;
     }).catch(error=>{
  
     })
}