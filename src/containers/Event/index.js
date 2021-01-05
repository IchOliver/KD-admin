import React, { Component, Fragment } from 'react';
import { Grid, Table, TableBody, TableRow, TableHead, TableCell, TextField, InputAdornment, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

import {toast} from 'react-toastify'

//json data
import latestList from '../../utils/json/latestList'

// images 
import deleteUser from '../../images/icon/delete-user.svg'
import search from '../../images/icon/search.svg'
import view from '../../images/icon/view.svg'
import edit from '../../images/icon/edit.svg'
import blockUser from '../../images/icon/block-user.svg'
import './style.scss'

const searchingFor = search => event =>
    event.title.toLowerCase().includes(search.toLowerCase()) || !search;

class Event extends Component{
    state = {
        search: '',
        pageOfItems: [],
        delete: false,
        suspend: false
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    deleteCartHandler = (id) => {
        let latestList = this.state.pageOfItems.filter(item => item.id !== id);
        this.setState({
            pageOfItems: latestList,
            delete: false
        });
        toast.success('user delete successfully')
    };
    suspendedCartHandler = (id) => {
        let latestList = this.state.pageOfItems.filter(item => item.id !== id);
        this.setState({
            pageOfItems: latestList,
            suspend: false
        });
        toast.success('user suspended successfully')
    };
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }

    deleteModalShow = () => {
        this.setState({
            delete: true
        })
    }
    deleteModalClose = () => {
        this.setState({
            delete: false
        })
    }

    suspendModalShow = () => {
        this.setState({
            suspend: true
        })
    }
    suspendModalClose = () => {
        this.setState({
            suspend: false
        })
    }
    render(){
        return(
            <Fragment>
                <div className="eventArea">
                <Grid className="eventTableWrap">
                <Grid className="tableHeader">
                        <h3 className="title">Event List</h3>
                        <TextField
                            variant="outlined"
                            name="search"
                            label="Search"
                            className="searchInput"
                            value={this.state.search}
                            onChange={this.changeHandler}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                        >
                                            <img src={search} alt="" />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid className="tableResponsive">
                        <Table className="tableStyle">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Time</TableCell>
                                    <TableCell>Room</TableCell>
                                    <TableCell>Duration</TableCell>
                                    <TableCell>Activity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.pageOfItems.filter(searchingFor(this.state.search)).map((item, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>{item.description}</TableCell>
                                        <TableCell>{item.time}</TableCell>
                                        <TableCell>{item.room}</TableCell>
                                        <TableCell>{item.duration}</TableCell>
                                        <TableCell>
                                            <ul className="activityList">
                                                <li><Link to={`/event-list-profile/${item.id}`}><img src={view} alt="" /></Link></li>
                                                <li><Link to={`/company-list-profile-edit/${item.id}`}><img src={edit} alt="" /></Link></li>
                                                <li onClick={this.suspendModalShow}><img src={blockUser} alt="" /></li>
                                                <li onClick={this.deleteModalShow}><img src={deleteUser} alt="" /></li>
                                            </ul>
                                            <SweetAlert
                                                show={this.state.delete}
                                                title="Delete"
                                                html
                                                text="Do you want to delete ?"
                                                type='error'
                                                onConfirm={() => this.deleteCartHandler(item.id)}
                                                onCancel={this.deleteModalClose}
                                                showCancelButton={true}
                                                showLoaderOnConfirm={true}
                                                confirmButtonText="Delete"
                                            />
                                            <SweetAlert
                                                show={this.state.suspend}
                                                title="Suspend"
                                                html
                                                showCancelButton={true}
                                                text="Do you want to Suspend ?"
                                                type='warning'
                                                onConfirm={() => this.suspendedCartHandler(item.id)}
                                                onCancel={this.suspendModalClose}
                                                showLoaderOnConfirm={true}
                                                confirmButtonText="Suspend"
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
                <Pagination
                  rowShow={5}
                  items={latestList}
                  onChangePage={this.onChangePage}
                />
                </div>
            </Fragment>
        )
    }
}
export default Event;