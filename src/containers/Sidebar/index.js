import React, { Fragment ,useState} from 'react'
import {
   Grid,
   ExpansionPanel,
   ExpansionPanelSummary

} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import logo from '../../images/logo.png'
import arrow from '../../images/icon/arrow.svg'
import ScrollArea from 'react-scrollbar'
import './style.scss'
const SidebarNav =(props)=>{
    const navigations=[
        {
            name:'Dashboard',
            icon:HomeOutlinedIcon,
            id:'1',
            link:'/'
        },
        {
            name:'Events',
            icon:BookOutlinedIcon,
            id:'2',
            submenus:[
                {
                    name:'Event',
                    link:'/event-list'
                },
                {
                    name:'Stand',
                    link:'/stand-list'
                },
                {
                    name:'Information',
                    link:'/information-list'
                }
            ]
            
        },
        {
           name:'Company',
           icon:EmojiTransportationOutlinedIcon,
           id:'3',
           link:'/company-list'
        },
        {
            name:'Notification',
            icon:NotificationsNoneOutlinedIcon,
            id:'4',
            link:'/notification'
        },
        {
            name:'Setting',
            icon:SettingsOutlinedIcon,
            id:'5',
            link:'/setting'
        },
        {
            name:'Log out',
            icon:ExitToAppOutlinedIcon,
            id:'6',
            link:'/signin'
        }
    ]
    const [expanded, setExpanded] = useState(0);

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return(
        <Fragment>
          <Grid className='sidebarMainWrapper'>
              <div className="logoSlidebar">
                    <NavLink to="/">
                        <img src={logo} alt="" style={{width:50,height:50,borderRadius:10,marginLeft:40}}/>
                    </NavLink>
              </div>
              <ScrollArea
                    speed={1}
                    className="scrollBar"
                    contentClassName='scrollBarContent'
                    horizontal={false}
                >
                    {navigations.map(nav => (
                        <Fragment
                            key={nav.id}
                        >
                            {nav.submenus ?
                                <ExpansionPanel
                                    classes={{
                                        root: 'navItems',
                                        expanded: 'navItemsExpanded',
                                    }}
                                    square
                                    expanded={expanded === nav.id}
                                    onChange={handleChange(nav.id)}>
                                    <ExpansionPanelSummary
                                        classes={{
                                            root: 'navItemsText',
                                            expanded: 'navItemsTextExpanded',
                                            expandIcon: 'navItemsTextIcon',
                                            content: 'navItemsTextContent'
                                        }}
                                        expandIcon={<img src={arrow} />}
                                    >
                                        {/* <img src={nav.icon} alt="" /> */}
                                          <nav.icon  style={{ color: 'white' }} />
                                          <span>{nav.name}</span>
                                       
                                    </ExpansionPanelSummary>
                                    <ul className="submenuItems">
                                        {nav.submenus.map((submenu, i) => (
                                            <li key={i}>
                                                <NavLink
                                                    activeClassName="active"
                                                    exact
                                                    to={submenu.link}>
                                                    {submenu.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </ExpansionPanel> : <Grid className="navItem">
                                    <NavLink
                                        activeClassName="active"
                                        exact
                                        onClick={() => setExpanded(0)}
                                        to={nav.link}>
                                           <nav.icon/>
                                        {nav.name}
                                    </NavLink>
                                </Grid>
                            }
                        </Fragment>
                    ))}
                </ScrollArea>
          </Grid>
        </Fragment>
    )
}

export default SidebarNav;