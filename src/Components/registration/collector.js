import React, {Component} from 'react';
import "./reg.css"
import {collectorRegisterUser, registerUser} from "../../apiCalls/login";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import Container from "@material-ui/core/Container";

class Collector extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            address: '',
            contact: '',
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        collectorRegisterUser(this.state.id,this.state.name, this.state.address, this.state.contact,3).then(res => console.log(res))
        window.location.href='/collectorList'
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <div>
                <div class = "heading">AddCollector</div>
                <Container maxWidth="xs">
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className="col-sm-9" id="id">
                                <TextField label="Id" fullWidth variant="outlined" name="id"
                                           onChange={(e) => this.handleChange(e)}/>
                            </div>

                        </Grid>
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

                        </Grid> <Grid item xs={12}>
                            <div className="col-sm-9" id="Contact">
                                <TextField label="Contact" fullWidth variant="outlined" name="Contact"
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

export default Collector;