import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'



const Featured = ({Events,Stands,Informations}) => {
    const featureds = [
        {
            icon: '',
            title: 'Event',
            value: Events.length,
            percent: '',
            bgColor: 'linear-gradient(240.95deg, #7BEAFE 0%, #1C8CFA 100%)',
            link: '/event-list'
        },
        {
            icon: '',
            title: 'Stand',
            value: Stands.length,
            percent: '',
            bgColor: 'linear-gradient(60.95deg, #3ADF9E 0%, #B3FB5B 100%)',
            link: '/stand-list'
        },
        {
            icon: '',
            title: 'Information',
            value: Informations.length,
            bgColor: 'linear-gradient(360deg, rgba(98, 88, 251, 0.9) 0.75%, rgba(134, 126, 255, 0.9) 100%)',
            link: '/information-list'
        },
    ]
    return (

        <Fragment>
            {featureds.map((featured, i) => (
                <Grid key={i} item lg={4} sm={6} xs={12}>
                    <Grid
                        style={{ background: `${featured.bgColor}` }}
                        className="featuredItem">
                        <div className="featuredContent">
                            <span>{featured.title}</span>
                            <h3>{featured.value}
                                {featured.percent && <span className="percentValue">{`${featured.percent}%`}</span>}
                            </h3>
                        </div>
                        <div className="featuredIcon">
                            {/* <img src={featured.icon} alt="" /> */}
                        </div>
                        <Link to={featured.link} className="viewBtn">View</Link>
                    </Grid>
                </Grid>
            ))}
        </Fragment>
    );
}

export default Featured;
