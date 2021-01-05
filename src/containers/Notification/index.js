import React, { Fragment ,Component} from 'react'
import {
    Grid,
    FormLabel,
    Button,
    TextField
   } from '@material-ui/core'
import Helmet from 'react-helmet'
import './style.scss'

class Notifcation extends Component{
  state={
      title:'',
      message:''
  }
  render(){
      return(
          <Fragment>
              <Grid className="pin_layout">
                   <Grid spacing={5}>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Title</FormLabel>
                           <TextField
                             className="inputStyle"
                             name="title"
                             fullWidth
                             value={this.state.title}
                             variant="outlined"
                           />
                       </Grid>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Message</FormLabel>
                           <TextField
                             className="inputStyle"
                             name="message"
                             fullWidth
                             value={this.state.message}
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

export default Notifcation;