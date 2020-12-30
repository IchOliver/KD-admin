import React from 'react'

import {Helmet} from 'react-helmet'
import {ToastContainer,toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'
import Routes from '../__Routes'

const App =(props) =>{
    return(
        <>
         <Routes/>
        </>
    )
}

export default App;