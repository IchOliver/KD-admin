import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import PrivateRoute from '../../containers/_PrivateRoute'


// Private components
import Dashboard from '../Dashboard'
import Company from '../Company'
import Information from '../Information'
import Notifcation from '../Notification'
import Event from '../Stand'
import Stand from '../Stand'
import Setting from '../Setting'

const Routes =()=>{
    return(
        <BrowserRouter>
            <Switch>
             <PrivateRoute
                exact
                path="/"
                component={Dashboard}
                titles={['Dashboard']}
                />
            <PrivateRoute
                exact
                path="/event-list"
                component={Event}
                titles={['Event']}
                />
            <PrivateRoute
                exact
                path="/stand-list"
                component={Stand}
                titles={['Stand']}
                />
            <PrivateRoute
                exact
                path="/information-list"
                component={Information}
                titles={['Information']}
                />
            <PrivateRoute
                exact
                path="/company-list"
                component={Company}
                titles={['Company']}
                />
            <PrivateRoute
                exact
                path="/notification"
                component={Notifcation}
                titles={['Notifcation']}
                />
            <PrivateRoute
                exact
                path="/setting"
                component={Setting}
                titles={['Setting']}
                />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
