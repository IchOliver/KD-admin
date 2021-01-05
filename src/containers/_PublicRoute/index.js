import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import cookie from 'js-cookie';
import './style.scss';
import { Grid } from '@material-ui/core';

export class PublicRoute extends React.Component {


    render() {
        return (
            <Grid className="PublicRoute">
                <Route
                    {...this.props}
                    exact
                    render={props =>
                        <Component {...props} />
                    }
                />
            </Grid>
        );
    }
}
