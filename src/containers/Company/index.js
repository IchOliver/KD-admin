import React, { Fragment,useState } from 'react'
import {Helmet} from 'react-helmet'
import {Grid ,Tabs,Tab} from '@material-ui/core'
import './style.scss'
import CompanyList from '../../components/CompanyList'
import AddCompany from '../../components/AddCompany'
import PinCode from '../../components/PinCode'

const Company=()=>{
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
       
        setValue(newValue);
    }
    return(
        <Fragment>
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
                        label="Add Company"
                       />
                       <Tab
                        disableRipple
                        label="Pin Code"
                       />
                    </Tabs>
                    {value === 0 && <CompanyList />}
                    {value === 1 && <AddCompany />}
                    {value ===2 && <PinCode/>}
            </Grid>

        </Fragment>
    )
}

export default Company;