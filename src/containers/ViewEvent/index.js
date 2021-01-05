import React, { Component, Fragment } from "react";
import { Grid, TextField, FormLabel, Button } from "@material-ui/core";
import { Helmet } from "react-helmet";
import camera from "../../images/icon/camera.svg";
import user1 from '../../images/user/user1.jpg'
import {API_URL,Image_URL} from '../../utils/api';

import "./style.scss";
import axios from "axios";

class ViewEvent extends Component {
  state = {
    title: "",
    duration: "",
    imagePreviewUrl: "",
    room:'',
    time:'',
    description:'',
    changed: false,
  };
  componentDidMount() {
    const id =this.props.match.params.id;
  
    axios.get(`${API_URL}/events/${id}`).then(response=>{
      const eventObject= response.data;
      console.log("event role id...",eventObject);
       this.setState({
         title:eventObject.title,
         description:eventObject.description,
         room:eventObject.room,
         time:eventObject.time,
         duration:eventObject.duration,
         imagePreviewUrl:`${Image_URL}/${eventObject.logo}`
       })
    })
    
}
  handleImageChange = e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
        this.setState({
            file,
            imagePreviewUrl: reader.result,
        });
    };
    reader.readAsDataURL(file);
    const formData = new FormData();
    formData.append('avatar', file);
};

  render() {
    return (
      <Fragment>
       
        <Grid className="editUserProfile">
          <Grid container spacing={5}>
            <Grid item lg={4} xs={12}>
            <Grid className="editProfileImages">
              <Grid className="editImages">
                <img
                  src={
                    this.state.imagePreviewUrl
                      ? this.state.imagePreviewUrl
                      : user1
                  }
                  alt="Company Logo"
                />
                <Grid component="label" className="inputFile" htmlFor="test">
                  <span className="camera">
                    <img src={camera} alt="camear"/>{" "}
                  </span>
                  <input onChange={this.handleImageChange} type="file" />
                </Grid>
              </Grid>
            </Grid>
            </Grid>
            <Grid item lg={8}>
               <form>
                   <Grid container spacing={4}>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Title</FormLabel>
                           <TextField
                            className="inputStyle"
                            name="title"
                            fullWidth
                            value={this.state.title}
                            variant="outlined"
                            // onChange={this.changeHandler}
                            // error={this.state.error.first_name && true}
                            // helperText={this.state.error.first_name && this.state.error.first_name}
                          />
                       </Grid>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Duration</FormLabel>
                           <TextField
                            className="inputStyle"
                            name="duration"
                            fullWidth
                            value={this.state.duration}
                            variant="outlined"
                            // onChange={this.changeHandler}
                            // error={this.state.error.first_name && true}
                            // helperText={this.state.error.first_name && this.state.error.first_name}
                          />
                       </Grid>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Room</FormLabel>
                           <TextField
                            className="inputStyle"
                            name="room"
                            fullWidth
                            value={this.state.room}
                            variant="outlined"
                            // onChange={this.changeHandler}
                            // error={this.state.error.first_name && true}
                            // helperText={this.state.error.first_name && this.state.error.first_name}
                          />
                       </Grid>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Time</FormLabel>
                           <TextField
                            className="inputStyle"
                            name="time"
                            fullWidth
                            value={this.state.time}
                            variant="outlined"
                            // onChange={this.changeHandler}
                            // error={this.state.error.first_name && true}
                            // helperText={this.state.error.first_name && this.state.error.first_name}
                          />
                       </Grid>
                       <Grid item xs={12}>
                           <FormLabel className="formLabel">Description</FormLabel>
                           <TextField
                            className="inputStyle"
                            name="email"
                            fullWidth
                            value={this.state.description}
                            variant="outlined"
                            // onChange={this.changeHandler}
                            // error={this.state.error.first_name && true}
                            // helperText={this.state.error.first_name && this.state.error.first_name}
                          />
                       </Grid>
                       {/* <Grid item xs={12}>
                                        <Button className="btnStyle" type="submit">Save</Button>
                       </Grid> */}
                   </Grid>
               </form>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default ViewEvent;
