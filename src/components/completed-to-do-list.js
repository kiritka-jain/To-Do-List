import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NewList from './newList';


const CompletedToDoList= (props)=> {
    const {list,handleCheck} = props;
  const [open, setOpen] = React.useState(true);

  const inlineStyle = {
    textDecoration: "line-through",
  };
 

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
     
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Completed Tasks" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
          <NewList style={inlineStyle} list={list} handleCheck={handleCheck} message="No completed task."/>
      
      </Collapse>
    </List>
  );
}
export default CompletedToDoList;