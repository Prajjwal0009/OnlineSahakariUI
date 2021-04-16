import React, {Component} from 'react';
import "./reg.css"
import {loginUser, registerUser} from "../../apiCalls/login";
import Container from "@material-ui/core/Container";
import {Radio, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class Registration extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            address: '',
            contact: '',
            startDate: '',
            endDate: '',
            areaId: '',
            area: '',
            isActive: '',
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        registerUser(this.state.name, this.state.address, this.state.contact, this.state.startDate, this.state.endDate, this.state.areaId, 3).then(res => console.log(res))
        window.location.href='/customerList'
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <Container maxWidth="xs">
                    <form onSubmit={(event) => this.onSubmit(event)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                    <div className="col-sm-9" id="Name">
                                        <TextField label="Name" fullWidth variant="outlined" name="name"
                                                   onChange={(e) => this.handleChange(e)}/>
                                </div>

                            </Grid>
                            <Grid item xs={12}>
                                    <div className="col-sm-9" id="Address">
                                        <TextField label="Address" fullWidth variant="outlined" name="Address"
                                                   onChange={(e) => this.handleChange(e)}/>
                                    </div>
                            </Grid>
                            <Grid item xs={12}>
                                    <div className="col-sm-9" id="contact">
                                        <TextField label="contact" fullWidth variant="outlined" name="contact"
                                                   onChange={(e) => this.handleChange(e)}/>
                                    </div>
                            </Grid>
                            <Grid item xs={12}>
                                 <div className="col-sm-9" id="Date">StartDate
                                        <TextField type ="date" placeholder="helo"  fullWidth variant="outlined" name="startDate"
                                                   onChange={(e) => this.handleChange(e)}/>
                                    </div>



                            </Grid>
                            <Grid item xs={12}>
                                   <div className="col-sm-9" id="EndDate">EndDate
                                        <TextField type ="date"  fullWidth variant="outlined" name="endDate"
                                                   onChange={(e) => this.handleChange(e)}/>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                               <div className="col-sm-9" id="AreaId">
                                        <TextField label="AreaId" fullWidth variant="outlined" name="areaId"
                                                   onChange={(e) => this.handleChange(e)}/>
                                    </div>
                            </Grid>
                        </Grid>

                        <br/>
                        <div className="row">
                            <div className="col-sm-8">

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                    </form>
                </Container>

            </div>
        );
    }
}

export default Registration;