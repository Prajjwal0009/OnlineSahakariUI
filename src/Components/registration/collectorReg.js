import React, {Component} from 'react';
import "./reg.css"
import {collectorRegisterUser, loginUser, registerUser} from "../../apiCalls/login";
import Container from "@material-ui/core/Container";
import {Radio, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class collectorReg extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id:'',
            name: '',
            address: '',
            contact: '',
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        collectorRegisterUser(this.state.id,this.state.name, this.state.address, this.state.contact, 3).then(res =>
        window.location.href='/collectorList'
        ).catch(err=>{
            window.location.href='/collectorList'
        })
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <div className="heading">AddCollector</div>
                <Container maxWidth="xs">
                    <form method="post" onSubmit={(event) => this.onSubmit(event)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div className="col-sm-9" id="id">
                                    <TextField label="Id" fullWidth variant="outlined" name="id"
                                               onChange={(e) => this.handleChange(e)}/>
                                </div>

                            </Grid> <Grid item xs={12}>
                            <div className="col-sm-9" id="Name">
                                <TextField label="Name" fullWidth variant="outlined" name="name"
                                           onChange={(e) => this.handleChange(e)}/>
                            </div>

                        </Grid>
                            <Grid item xs={12}>
                                <div className="col-sm-9" id="Address">
                                    <TextField label="Address" fullWidth variant="outlined" name="address"
                                               onChange={(e) => this.handleChange(e)}/>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="col-sm-9" id="contact">
                                    <TextField label="contact" fullWidth variant="outlined" name="contact"
                                               onChange={(e) => this.handleChange(e)}/>
                                </div>
                            </Grid>
                        <br/>
                        <div className="row">
                            <div className="col-sm-8">

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        </Grid>
                    </form>
                </Container>
            </div>
    );
    }
    }


export default collectorReg;