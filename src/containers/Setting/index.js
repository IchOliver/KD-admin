import React, { Fragment ,Component} from 'react'
import {
    Grid,
    FormLabel,
    Button,
    TextField
   } from '@material-ui/core'
import Helmet from 'react-helmet'
import './style.scss'

class Setting extends Component{
  state={
      name:'',
      password:'',
      c_pass:''
  }
  render(){
      return(
          <Fragment>
              <Grid className="setting_layout">
                   <Grid spacing={5}>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Name</FormLabel>
                           <TextField
                             className="inputStyle"
                             name="name"
                             fullWidth
                             value={this.state.name}
                             variant="outlined"
                           />
                       </Grid>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Password</FormLabel>
                           <TextField
                             className="inputStyle"
                             name="password"
                             fullWidth
                             value={this.state.password}
                             variant="outlined"
                           />
                       </Grid>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Confirm Password</FormLabel>
                           <TextField
                             className="inputStyle"
                             name="c_pass"
                             fullWidth
                             value={this.state.c_pass}
                             variant="outlined"
                           />
                       </Grid>
                       <Grid item xs={12} className="button_margin">
                          <Button className="btnStyle" type="submit">Save</Button>
                       </Grid>
                   </Grid>
                </Grid>
          </Fragment>
      )
  }

}

export default Setting;