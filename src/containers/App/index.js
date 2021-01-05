import React from 'react'

import {Helmet} from 'react-helmet'
import {ToastContainer,toast} from 'react-toastify'
import GlobalStyle from '../../global-styles';

import 'react-toastify/dist/ReactToastify.min.css'
import Routes from '../__Routes'

const App =(props) =>{
    return(
        <>
         <GlobalStyle />
         <Routes/>
         <ToastContainer position="top-right" />
        </>
    )
}

export default App;