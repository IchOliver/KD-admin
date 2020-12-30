import React, { Fragment,useState } from 'react'
import {Helmet} from 'react-helmet'
import {Grid ,Tabs,Tab} from '@material-ui/core'
import './style.scss'

const Company=()=>{
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return(
        <Fragment>
            <Helmet>
                <title>Company</title>
            </Helmet>
            <Grid className="userArea">
              <Tabs
                    value={value}
                    onChange={handleChange}
                    classes={{
                        root: 'tabsWrap',
                        scrollable: 'tabsScrollable',
                        scroller: 'tabsScroller',
                        indicator: 'tabsIndicator',
                        flexContainer: 'tabsFlexContainer'
                    }}
                >
                      <Tab
                        disableRipple
                        label="Company list"
                       />
                       <Tab
                        disableRipple
                        label="Pin Code"
                       />
                    </Tabs>
                    {/* {value === 0 && <CompanyList />}
                    {value === 1 && <PinCode />} */}
            </Grid>

        </Fragment>
    )
}

export default Company;