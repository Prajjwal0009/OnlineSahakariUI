import React, {Component} from 'react';
import "./login.css"
import {TextField} from "@material-ui/core";
import {getCountries} from "../../apiCalls/login";
/*import React from "react";
import Routes from "./routes";*/

class Login extends Component {
    state={
        name:'',
        countries:[]
    }
    componentDidMount() {
        console.log('------------------')
        this.getAllCountries()
    }
    getAllCountries=()=>
    {
        let self=this;
        getCountries().then(function (res) {
            self.setState({countries: res.data})
        }).catch((err)=>console.log(err))

    }
    componentWillReceiveProps(nextProps) {
    }

    render() {
        const {name,countries} = this.state;
        return (
            <div>
                {console.log(this.state.countries)}
                {this.state.countries.map((item)=><div>{item.name}</div>)}
            </div>
        );
    }
}

export default Login;