import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Grid, List, ListItem, Typography, Button, Menu, Popper, Grow, Paper, ClickAwayListener, } from '@material-ui/core'

import ScrollArea from 'react-scrollbar'
import user from '../../images/user/user1.jpg'
import './style.scss'
const HeaderComponent =(props) =>{
    const [profile, setProfile] = useState(false)
    const [open, setOpen] = React.useState(false);
    const profileAnchorRef = React.useRef(null);


    function profileHandleClose(event) {
        if (profileAnchorRef.current && profileAnchorRef.current.contains(event.target)) {
            return;
        }
        setProfile(false);
    }
    function profileHandleToggle() {
        setProfile(prevOpen => !prevOpen);
    }

    return(
        <Fragment>
        <header className="headerArea">
            <div className="headerLeft">
                <ul onClick={props.colupsMenuHandler} className="menuTrigger">
                    <li className="first"></li>
                    <li className="second"></li>
                    <li className="third"></li>
                </ul>
            </div>
            <div className="headerRight">
                <div className="shortProfile">
                    <span
                        className="profile"
                        ref={profileAnchorRef}
                        aria-haspopup="true"
                        onClick={profileHandleToggle}
                    >
                        <img src={user} style={{height:40,width:40,borderRadius:20}} alt="" />
                        <span>Karl Wiik</span>
                        <i className={profile ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                    </span>
                    <Popper
                        className="profileDropdownWrapper"
                        open={profile}
                        anchorEl={profileAnchorRef.current}
                        keepMounted
                        transition
                        disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                className="dropDown"
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    {/* <ClickAwayListener onClickAway={profileHandleClose}> */}
                                        <ul className="profileManu">
                                            <li><Button component={Link} to="/profile">Profile</Button> </li>
                                            <li><Button component={Link} to="/general-settings">Setting</Button> </li>
                                            <li><Button component={Link} to="/">Log out</Button> </li>
                                        </ul>
                                    {/* </ClickAwayListener> */}
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        </header >
    </Fragment>
    )
}

export default HeaderComponent;