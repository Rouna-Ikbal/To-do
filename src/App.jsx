import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";


export default function App() {
  const [AddItem, SetAddItem] = useState("");
  let [AddArray, SetAddArray] = useState([]);

  const onChange = (e) => {
    SetAddItem(e.target.value);
  };

  const onClick = () => {
    SetAddArray((prev) => {
      let newArray = [...prev];         /*creates a new array (newArray) and copies all the elements from the existing array (prev) into the new one*/
      newArray.push({ task: AddItem });   /*push added item to array*/
      return newArray;
    }
    );
    SetAddItem("");
  };

  const onDelete = (id) => {

   
    SetAddArray((prev)=>{
      const newCopy=[...prev]
      newCopy.splice(id, 1);
      console.log({id,newCopy})
      return newCopy

    })
  };

  return (
    <Box height="500px" sx={boxStyle}>
      <TextField id="outlined-basic"
        value={AddItem}
        label="Enter Item" variant="outlined" size='small' onChange={onChange}x = {{paddingBottom: "20px"}}/>
      <Button variant="contained" onClick={onClick}>Add</Button>  {/* add item to array on button click */}
      <ListContainer>
        {AddArray.map((item, key) => {
          return (<ListItemButton key={key}>
            <ListItemText primary={item.task} />
            <Button variant="contained" onClick={() => onDelete(key)}>Delete</Button>  {/* delete item from array on button click */}
          </ListItemButton>);
        })
        }
      </ListContainer>
    </Box>
  );
}

function ListContainer({ children }) {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" >
          To-Do
        </ListSubheader>
      }
    >
      {children}
    </List>
  );

}

const boxStyle = {
  background: "#aef5ca",
  textAlign: "-moz-center",
  padding: "20px",
}

