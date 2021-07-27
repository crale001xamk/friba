import { Box, Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRef, useState} from 'react';
import {  List, ListItem, ListItemIcon, IconButton, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  root: {
  
  },
  textbox: {
          margin: theme.spacing(1),
          size: "small"

  },
  paperi: {
      margin: "10px"
  },
  boksi: {
    marginTop:"10px",
  },
  icon:{
    color:"red"
  },
  chip:{
    margin: "10px"
},
  textred:{
    color:"red"
  },
  trophy:{
    color:"gold"
  }
}));


function NewRun(props) {
    const classes = useStyles();
    return (
<>
    { props.players.map( (key, idx) => {
            let icon;
            let color ="default"
            return (

            <Chip 
                label={props.players[idx].nimi}
                icon={icon}
                className={classes.chip}
                color={color}
                clickable
                key={idx}
                 // onClick={ () => setSelectedChip(idx)}
            />

            )})
    }

    <Button
          type="submit"
          variant="contained"
          color="primary"
          name="add_btn"
          style={{marginBottom : 10, marginTop : 10}}
          size="small"
          fullWidth

        > Luo uusi peli
    </Button>

</>

    );
  }
  
  export default NewRun;