import { Button, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react'

const SingleTask = ({i,v,doneHandler,delHandler}) => {
    return (
        <>
            <Paper 
              elevation={4} 
              style={{
                display:"flex",
                marginBottom:"1.5%" , 
                marginTop:"1.5%",
                justifyContent:"space-evenly",
                alignItems:"center",
              }} >
              <Typography variant="caption">{i+1}</Typography>
              <Typography variant="h4" style={{textDecoration: v.done && "line-through",color: v.done && "#d7d7d9"}}>{v.title}</Typography>
              <div>
                <Button startIcon={v.done ? <CheckCircleIcon /> :<CheckCircleOutlineIcon />}
                  variant="outlined" onClick={() => doneHandler(v.id)}>
                  {" "}
                  {v.done ? "Undone" : "Done"}{" "}
                </Button>
                <Button onClick={() => delHandler(v.id)} variant="contained" startIcon={<DeleteIcon />}
                  style={{marginLeft:"5px"}}>
                   Delete
                </Button>
              </div>
            </Paper>
        </>
    );
};
export default SingleTask;