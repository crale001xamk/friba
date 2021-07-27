import { AppBar, Typography, Tabs, Tab } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position:"relative",
      margin:"15"
    },
    title: {
      flexGrow: 1,
      textDecoration: "none",
      color: "inherit",
      marginBottom:"5px",
    },
    indicator: {
        backgroundColor:"white"
    }
  }));

function TopNav() {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    const currentTab = () => {
        let path = window.location.pathname
        if (path === "/friba/newrun/") return 0
        else if (path === "/friba/players") return 1
        else if (path === "/friba/tracklist") return 2
        else if (path === "/friba/results") return 3
    }

    const [value, setValue] = useState(currentTab());

    return(
        <>
        <Typography component={Link} to="/" className={classes.title} variant="h5">
            Frisbee golf -buddy
            </Typography>
        
        <AppBar className={classes.root}>

                <Tabs
                    TabIndicatorProps={{style: {background:'white'}}}
                    value={value}
                    textColor="inherit"
                    role="tabpanel"
                    onChange={handleChange}
                >
                    
                    <Tab value={0} icon={<AddCircleIcon/>} component={Link} to="/friba/newrun/" />
                    <Tab value={1} icon={<PersonIcon />} component={Link} to="/friba/players" />
                    <Tab value={2} label="Radat" component={Link} to="/friba/tracklist" />
                    <Tab value={3} label="Tulokset" component={Link} to="/friba/results" />
                    
                 
                </Tabs>
         
        </AppBar>
        </>
    );
}
export default TopNav;