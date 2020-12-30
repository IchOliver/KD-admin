import React,{useState,Fragment,Component} from 'react'
import {Route} from 'react-router-dom'
import { Grid } from '@material-ui/core'
import SidebarNav from '../Sidebar'
import HeaderComponent from '../HeaderComponent'
import './style.scss'

const PrivateRoute =(props) =>{
    const [colupsMenu, setColupsMenu] = useState(false)

    const colupsMenuHandler = () => {
        setColupsMenu(!colupsMenu)
    }

    return(
        <Fragment>
            <Grid className={colupsMenu ? 'mainContainerArea mainContainerAreaColups' : 'mainContainerArea'}>
                <SidebarNav
                    colupsMenuHandler={colupsMenuHandler}
                />
                <Grid className="mainContainer">
                    <HeaderComponent
                        colupsMenuHandler={colupsMenuHandler}
                    />

                    <Grid className="mainContentRouter">
                        {props.titles && <ul className="breadCumbWrap">
                            {props.titles.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>}

                        <Route
                            {...props}
                            exact
                            render={props =>
                                <Component {...props} />
                            }
                        />
                    </Grid>

                </Grid>
            </Grid>
        </Fragment >
    )

}

export default PrivateRoute;