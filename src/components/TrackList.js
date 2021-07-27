import { Box, Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRef, useState} from 'react';
import {  List, ListItem, ListItemIcon, IconButton, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';



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
  textgreen:{
    color:"green",
    fontSize:"50"

  },
  textred:{
    color:"red"
  },
  trophy:{
    color:"gold"
  }
}));


function TrackList(props) {

    return (
<>
        <List >
        { props.tracks_data.map( (key, idx) => {  
          return (
            <ListItem key={idx} divider={true}>
              <ListItemText
               primary={`${props.tracks_data[idx].nimi}`}
              />


            </ListItem>
                );
            })}
      </List>

    <Button
          type="submit"
          variant="contained"
          color="primary"
          name="add_btn"
          style={{marginBottom : 10, marginTop : 10}}
          size="small"
          fullWidth
          disabled
         
        > Lisää rata (tba)
    </Button>

</>

    );
  }
  
  export default TrackList;