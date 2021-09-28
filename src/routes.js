import React,{Component} from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./Components/registration/registration";
import SignIn from "./Components/registration/log";
import Collector from "./Components/registration/collector";
import StickyHeadTable from "./Components/registration/collectorList";
import CustomerList from "./Components/registration/customerList";
import CollectionList from "./Components/registration/collectionList";
import collection from "./Components/registration/collection";
import Home from "./home/home";
import CollectorList from "./Components/registration/collectorList";
import collectorReg from "./Components/registration/collectorReg";


class Routes extends Component {
    componentDidMount() {
        console.log('route')
    }


    render() {
        return (
            <div>
           <Router>
           <Switch>
               <Route path="/collectorList" component={CollectorList}/>
               <Route path="/customerList" component={CustomerList}/>
               <Route path="/collectionList" component={CollectionList}/>
               <Route path="/registration" component={Registration}/>
               <Route path="/collector" component={Collector}/>
               <Route path="/collection" component={collection}/>
               <Route path="/signIn" component={SignIn}/>
               <Route path="/collectorReg" component={collectorReg}/>


               <Route path="/home" component={Home}/>
           </Switch>
           </Router>
            </div>
        );
    }
}

export default Routes;