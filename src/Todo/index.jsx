import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Todo() {
  const [itemArray, setItemArray] = useState([]);
  const [newItem, setnewItem] = useState("");

  const onChange = (e) => {
    setnewItem(e.target.value);
  };

  const onClick = () => {
    setItemArray((prev) => {
      let newArray = [...prev];
      newArray.push({ task: newItem });
      return newArray;
    });
    setnewItem("");
  };

  return (
    <Box height="500px" sx={bxStyle}>
      <TextField
        id="outlined-basic"
        label="Enter Task"
        size="small"
        value={newItem}
        onChange={onChange}
      />

      <Button variant="contained" onClick={onClick}>
        ADD
      </Button>

      <ListContainer>
        {itemArray.map((item, key) => {
          return (
            <ListItemButton key={key}>
              <ListItemText primary={item.task} />
            </ListItemButton>
          );
        })}
      </ListContainer>
    </Box>
  );
}

function ListContainer({ children }) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Todo
        </ListSubheader>
      }
    >
      {children}
    </List>
  );
}

const bxStyle = {
  background: "#D5CCFF",
  textAlign: "-webkit-center",
};

//const newArray = [{ name: "rouna" }, { name: "jabi" }];
