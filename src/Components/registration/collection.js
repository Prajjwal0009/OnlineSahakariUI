import React, {Component} from 'react';
import "./reg.css"
import Container from "@material-ui/core/Container";
import {Radio, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {collectionRegisterUser} from "../../apiCalls/login";

class collection extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id:'',
            collectorId: '',
            customerId: '',
            amount: '',
            collectionDate: '',
            receivedBy: '',
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        collectionRegisterUser(this.state.id,this.state.collectorId, this.state.customerId, this.state.amount, this.state.collectionDate, this.state.receivedBy, 3).then(res =>
        window.location.href='/collectionList'
    )

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
                                <div className="col-sm-9" id="id">
                                    <TextField label="Id" fullWidth variant="outlined" name="ID"
                                               onChange={(e) => this.handleChange(e)}/>
                                </div>

                            </Grid>
                            <Grid item xs={12}>
                                <div className="col-sm-9" id="id">
                                    <TextField label="collectorId" fullWidth variant="outlined" name="collectorID"
                                               onChange={(e) => this.handleChange(e)}/>
                                </div>

                            </Grid>
                            <Grid item xs={12}>
                                <div className="col-sm-9" id="id">
                                    <TextField label="customerId" fullWidth variant="outlined" name="customerId"
                                               onChange={(e) => this.handleChange(e)}/>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="col-sm-9" id="amount">
                                    <TextField label="amount" fullWidth variant="outlined" name="amount"
                                               onChange={(e) => this.handleChange(e)}/>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="col-sm-9" id="Date">collectionDate
                                    <TextField type ="date" placeholder="helo"  fullWidth variant="outlined" name="collectionDate"
                                               onChange={(e) => this.handleChange(e)}/>
                                </div>



                            </Grid>
                            <Grid item xs={12}>
                                <div className="col-sm-9" id="name">
                                    <TextField label="receivedBy" fullWidth variant="outlined" name="receivedBy"
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

export default collection;