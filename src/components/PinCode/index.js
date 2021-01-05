import React,{Component, Fragment} from 'react'
import {
 Grid,
 FormLabel,
 Button,
 TextField
} from '@material-ui/core'
import Helmet from 'react-helmet'
import './style.scss'
class PinCode extends Component{
   state={
       code:''
   }
    render(){
        return(
            <Fragment>
              
                <Grid className="pin_layout">
                   <Grid spacing={5}>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Pin Code</FormLabel>
                           <TextField
                             className="inputStyle"
                             name="code"
                             fullWidth
                             value={this.state.code}
                             variant="outlined"
                           />
                       </Grid>
                       <Grid item xs={12} className="button_margin">
                          <Button className="btnStyle" type="submit">Send</Button>
                       </Grid>
                   </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default PinCode;