import React, { Component, Fragment } from "react";
import { Grid, TextField, FormLabel, Button } from "@material-ui/core";
import { Helmet } from "react-helmet";
import camera from "../../images/icon/camera.svg";
import user1 from '../../images/user/user1.jpg'
import "./style.scss";

class AddCompany extends Component {
  state = {
    name: "",
    email: "",
    imagePreviewUrl: "",
    changed: false,
  };
  componentDidMount() {
    // const id = parseInt(this.props.match.params.id);
    // let user = userList.filter(u => u.id === id);
    // if (user.length >= 0) {
    //     this.setState({
    //         user: user[0]
    //     })
    // }
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
                           <FormLabel className="formLabel">Name</FormLabel>
                           <TextField
                            className="inputStyle"
                            name="name"
                            fullWidth
                            value={this.state.name}
                            variant="outlined"
                            // onChange={this.changeHandler}
                            // error={this.state.error.first_name && true}
                            // helperText={this.state.error.first_name && this.state.error.first_name}
                          />
                       </Grid>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Email</FormLabel>
                           <TextField
                            className="inputStyle"
                            name="email"
                            fullWidth
                            value={this.state.email}
                            variant="outlined"
                            // onChange={this.changeHandler}
                            // error={this.state.error.first_name && true}
                            // helperText={this.state.error.first_name && this.state.error.first_name}
                          />
                       </Grid>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Website</FormLabel>
                           <TextField
                            className="inputStyle"
                            name="email"
                            fullWidth
                            value={this.state.email}
                            variant="outlined"
                            // onChange={this.changeHandler}
                            // error={this.state.error.first_name && true}
                            // helperText={this.state.error.first_name && this.state.error.first_name}
                          />
                       </Grid>
                       <Grid item lg={6} xs={12}>
                           <FormLabel className="formLabel">Linkedin</FormLabel>
                           <TextField
                            className="inputStyle"
                            name="email"
                            fullWidth
                            value={this.state.email}
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
                            value={this.state.email}
                            variant="outlined"
                            // onChange={this.changeHandler}
                            // error={this.state.error.first_name && true}
                            // helperText={this.state.error.first_name && this.state.error.first_name}
                          />
                       </Grid>
                       <Grid item xs={12}>
                                        <Button className="btnStyle" type="submit">Save</Button>
                       </Grid>
                   </Grid>
               </form>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default AddCompany;
