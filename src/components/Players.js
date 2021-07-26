import { Box, Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRef, useState} from 'react';
import {  List, ListItem, ListItemIcon, IconButton, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import numeral from 'numeral';


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


function Players(props) {
  const classes = useStyles();
  const gr_level = useRef();
  const time = useRef();
  const [errPrompt, setErrPrompt] = useState({});
  

  const formHandler = (e) => {
    e.preventDefault();
    let err = {};

    if (!gr_level.current.value) {
        err = {...err, gr_level : "Level between 1-150"}
    } else if (gr_level.current.value > 150 || gr_level.current.value < 1) {
        err = {...err, gr_level : "Level must be between 1-150"}
    } else if ( props.grSpeedList.some((o) => o.gr == gr_level.current.value)) {
        err = {...err, gr_level : `Input already exists for gr: ${gr_level.current.value}.
        You can remove an existing run by clicking the delete icon`}
    }

    if (!time.current.value){
        err = {...err, time : "Input minutes"}
    } else if (time.current.value <= 0) {
      err = {...err, time : "Cannot use 0 or negative numbers"}
    } else if (!isFinite(String(time.current.value))) {
      err = {...err, time : "Use dot as fraction separator"}
    }

    if (Object.entries(err).length > 0) {
        setErrPrompt({...err});
      } else {
        setErrPrompt({});
        addToList(gr_level.current.value, time.current.value )
        
        }
  }

  const addToList = (gr, time) => {
    let newItem = {gr : Number(gr), min : Number(time) };
    let newObj = props.grSpeedList;
    newObj.push(newItem);
    props.calcExpHour(newObj);
  }

  const deleteFromList = (idx) => {
    let newObj = [];
    newObj = props.grSpeedList.filter(( ele, indeksi) => {
      return(indeksi !== idx);
    });

    if (newObj.length > 0) {
      props.calcFastest(newObj);
    } else {
      props.setGrSpeedList([]);
    }
    
  }

  // sort before rendering
  const sortDesc = () => {
    let arr = props.grSpeedList;

    arr.sort(function(b, a){
        var c = Number(a.prcntSpeed);
        var d = Number(b.prcntSpeed);
        return c-d;
    })
    return(arr);
  }

    return (
    <Box>
      
      <form onSubmit={formHandler}>
      <Box className={classes.boksi} display="flex" flexDirection="column">
        <TextField
        className={classes.textbox}
        name="gr_level"
        label="GR level 1-150"
        type="number"
        inputRef={gr_level}
        error={Boolean(errPrompt.gr_level)}
        helperText={errPrompt.gr_level}
        variant="filled"
        placeholder="Input GR level..."
        size="small"
      />
      
      <TextField
        className={classes.textbox}
        name="time"
        label="Time in minutes"
        inputRef={time}
        error={Boolean(errPrompt.time)}
        helperText={errPrompt.time}
        variant="filled"
        placeholder="Minutes/run..."
        size="small"
      />

    <Button
          type="submit"
          variant="contained"
          color="primary"
          name="add_btn"
          style={{marginBottom : 10, marginTop : 10}}
          size="small"
         
        > Add 
    </Button>
      
      <List >
        { sortDesc().map( (key, idx) => {  
          return (
            <ListItem key={idx} divider={true}>
              <ListItemText
                primary={`GR ${props.grSpeedList[idx].gr} / ${props.grSpeedList[idx].min} min`}
              />

              { (props.grSpeedList[idx].prcntSpeed == 100 ? <EmojiEventsIcon className={classes.trophy}/> : null)}

              <ListItemText
                className={props.grSpeedList[idx].prcntSpeed == 100 ? classes.textgreen : classes.textred }
                primary={`${props.grSpeedList[idx].prcntSpeed} %`}
                secondary={`${numeral(props.grSpeedList[idx].expHr).format('0.0 a')} exp/Hr `}
              />

              <ListItemIcon>
                <IconButton 
                  edge="end"
                  onClick={ () => deleteFromList(idx)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>

            </ListItem>
                );
            })}
      </List>

      </Box>
      </form>

    </Box>

    );
  }
  
  export default Players;