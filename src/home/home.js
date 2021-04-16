import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {classes} from "istanbul-lib-coverage";
import "./style.css"

class MenuIcon extends Component {
    render() {
        return null;
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <Button color="inherit" onClick={(e)=>window.location.href='/home'}>OnlineSahakari</Button>
                        </Typography>
                        <div class="log-in">
                            <Button color="inherit" onClick={(e)=>window.location.href='/customerList'}>Customer</Button>
                            <Button color="inherit" onClick={(e)=>window.location.href='/collectorList'}>Collector</Button>
                            <Button color="inherit" onClick={(e)=>window.location.href='/collectionList'}>Collection</Button>
                            <button color="inherit" onClick={(e)=>window.location.href='/signIn'}>LogOut</button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Home;