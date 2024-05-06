import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


//card relaeted imports
import BasicCard from "./BasicCard"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddCommentIcon from '@mui/icons-material/AddComment';

//image imported
import a from "./../../../assets/IT21174780-1.jpg";
import girl from "./../../../assets/IT21174780-2.png";



export default function MyStatus() {

  const handleDelete = async (id) => {
    try {
      // Perform the deletion operation on the backend
      await fetch(`http://localhost:8080/Workout/${id}`, {
        method: 'DELETE',
      });
  
      // Filter out the workout with the specified id
      const updatedWorkoutStatus = workoutstatus.filter(workout => workout.id !== id);
      // Update the state with the filtered workout status
      setWorkoutstatus(updatedWorkoutStatus);
      handleClose(); // Close the popover
    } catch (error) {
      console.error('Error deleting workout:', error);
      // Handle error if necessary
    }
  };
  

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  const handleEdit = (id) => {
    // Navigate to the updatestatus page and pass the ID as a URL parameter
    history.push(`/updatestatus/${id}`);
    handleClose(); // Close any modal or dropdown if needed
  };



const [workoutstatus,setWorkoutstatus]= useState([]);
console.log(workoutstatus);

useEffect( () =>{
  const fechwokoutstatus = async ()=>{
  try {
      const response = await fetch("http://localhost:8080/Workout");
      const data = await response.json();
      setWorkoutstatus(data);
  } catch (error) {
    console.error("Error feching wokout status",error.message)
    
  }}

  fechwokoutstatus();
},[])


   return (
    <div style={{
      position: 'absolute',
      margin: -10,
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // backgroundColor: '',
      minHeight: '210vh',
      minWidth: '210vh',
      // backgroundColor:'#eef2f3',
      backgroundImage:`url(${girl})`,
      backgroundAttachment: 'fixed', // Fix the background image
      
    }}>

    <div style={{marginTop:20,display: 'flex',mb:2, justifyContent: 'center', gap: '20px', flexWrap: 'wrap' ,fontFamily:'monospace' }}>
      <div>
    {workoutstatus.map((workout,index) => (
      <Card key={workout.id} sx={{ maxWidth: 345, marginBottom: 2, backgroundColor: '#B2BABF' }}>
              <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: 'black', width: '35px', height: '35px' }} aria-label="recipe" >
                      I
                    </Avatar>
                  }
                  action={
                    <div>  
                        <IconButton aria-label="settings" onClick={handleClick} >
                            <MoreVertIcon />
                          </IconButton>
                          <Popover
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'right',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                          >
                            <MenuItem onClick={() => handleEdit(workout.id)}>Edit</MenuItem>
                            <MenuItem onClick={() => handleDelete(workout.id)}>Delete</MenuItem>
                          </Popover>
                  </div>
                  }
                />
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px' }}>
          <p>Day { index + 1}</p>
          <p>{new Date(workout.date).toLocaleDateString('en-US')}</p>
        </div>
        <CardMedia
          component="img"
          alt="Workout Image"
          height="100"
          image={a}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {workout.workoutState}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {workout.description}
          </Typography>
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', margin: '0 20px' }}>
          {workout.state.map((item, index) => (
            <BasicCard key={index} name={item.name} completed={item.completed} burnedCalories={item.burnedCalories} />
          ))}
        </div>
        <CardActions sx={{ ml: 1 }}>
          {/* like shera commernt */}
          <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="Comment">
            <AddCommentIcon />
            </IconButton>
            <IconButton aria-label="share">
             <ShareIcon />
            </IconButton>
        </CardActions>
      </Card>
    ))}
    </div>
  </div>
  </div>
)
};

