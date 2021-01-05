import React,{Fragment,useEffect,useState} from 'react'
import {Helmet} from 'react-helmet'
import {
 Grid
} from '@material-ui/core'
import axios from 'axios'
import {API_URL} from '../../utils/api'
import Featured from '../../components/Featured'
import LatestEvent from '../../components/LatestEvent'

const Dashboard = props=>{
    const [events,setEvents] = useState([]);
    const [stands,setStands] = useState([]);
    const [informations,setInformations] = useState([]);
useEffect(async()=>{
    await Promise.all([
        axios.get(`${API_URL}/events`).then(response=>{
            console.log("event...",response.data.data)
           setEvents(response.data.data)
         }).catch(error=>{
      
         }),
         axios.get(`${API_URL}/stands`).then(response=>{
            console.log("stand...",response.data.data)
            setStands(response.data.data)
         }).catch(error=>{
      
         }),
         axios.get(`${API_URL}/informations`).then(response=>{
            console.log("informations...",response.data.data)
            setInformations(response.data.data)
         }).catch(error=>{
      
         }),

    ]

    )

},[])

    return (
        <Fragment>
            <Grid container spacing={4}>
                 <Featured 
                 Events={events}
                 Stands={stands}
                 Informations={informations}
                 />
                 <Grid item xs={12} >
                    <LatestEvent latestEvents={events}/>
                 </Grid>
            </Grid>
        </Fragment>
    )
}
export default Dashboard;