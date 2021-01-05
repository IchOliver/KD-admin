import React from 'react'

import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import PrivateRoute from '../../containers/_PrivateRoute'


// Private components
import Dashboard from '../Dashboard'
import Company from '../Company'
import Information from '../Information'
import Notifcation from '../Notification'
import Event from '../Event'
import Stand from '../Stand'
import Setting from '../Setting'
import ViewCompany from '../ViewCompany'
import Signin from '../Signin'
import { PublicRoute } from '../_PublicRoute'
import ViewEvent from '../ViewEvent'

const Routes =()=>{
    return(
        <BrowserRouter>
            <Switch>
             <PublicRoute
              exact
              path="/signin"
              component={Signin}
             />
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
             <PrivateRoute
                exact
                path="/company-list-profile/:id"
                component={ViewCompany}
                titles={['View Company']}
                />
             <PrivateRoute
                exact
                path="/event-list-profile/:id"
                component={ViewEvent}
                titles={['View Event']}
                />
                <Redirect exact path="/" component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
