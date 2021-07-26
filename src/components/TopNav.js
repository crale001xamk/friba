import { AppBar, Typography, Tabs, Tab } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

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
        if (path === "/d3_paragon_calculator/") return 0
        else if (path === "/d3_paragon_calculator/compare") return 1
    }

    const [value, setValue] = useState(currentTab());

    return(
        <>
        <Typography component={Link} to="/" className={classes.title} variant="h5">
            Frisbee golf -pal
            </Typography>
        
        <AppBar className={classes.root}>

                <Tabs
                    TabIndicatorProps={{style: {background:'white'}}}
                    value={value}
                    textColor="inherit"
                    role="tabpanel"
                    onChange={handleChange}
                >
                    <Tab value={0} icon={<PersonAddIcon />} component={Link} to="/d3_paragon_calculator/" />
                    <Tab value={1} label="Radat" component={Link} to="/d3_paragon_calculator/compare" />
                    <Tab value={2} label="Tulokset" component={Link} to="/d3_paragon_calculator/compare" />
                    <Tab value={3} label="info" component={Link} to="/d3_paragon_calculator/compare" />
                    
                 
                </Tabs>
         
        </AppBar>
        </>
    );
}
export default TopNav;