import React, { useState } from "react";
import axios from "axios";


import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import aa from "./../../../assets/IT21174780-3.png"
// import girl from "./../../../assets/IT21174780-2.png"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Await } from "react-router-dom";



function SharedWorkoutStatus() {

  const handleAddCard = () => {
    const newPlan = {
      name: "",
      completed: "",
      burnedCalories: ""
      
    };
    setWorkoutPlans([...workoutPlans, newPlan]);
  };


  const handleRemoveCard = (index) => {
    const updatedPlans = [...workoutPlans];
    updatedPlans.splice(index, 1);
    setWorkoutPlans(updatedPlans);
  };


  // make array and  make object as main data 
  const handleInputChange = (e, index, key) => {
    const updatedPlans = [...workoutPlans];
    updatedPlans[index][key] = e.target.value;
  
    // Convert updatedPlans to a new formData object
    const newFormData = {
      ...formData,
      state: updatedPlans
    };
  
    setFormData(newFormData);
  };
  
  // set data 
  const [workoutPlans, setWorkoutPlans] = useState([]);



  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date,
    });
  };




  const [formData,setFormData] = useState([])

  // sete date separatly
  const handleChange = (event) =>{
    const {name,value} = event.target;
    setFormData({
      ...formData,[name]:value,

    })
    
  }

  // submit haddl 
const haddleSubmit = async (e) => {
  e.preventDefault();

  console.log(formData);

  try {
    const response = await fetch("http://localhost:8080/Workout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Specify the content type as JSON
      },
      body: JSON.stringify(formData) // Convert formData to JSON string and send in the body
    });

    if (response.ok) {
      // Handle successful response
      console.log("Workout data submitted successfully!");
    } else {
      // Handle unsuccessful response
      console.error("Failed to submit workout data.");
    }
  } catch (error) {
    // Handle fetch error
    console.error("Error occurred while submitting workout data:", error);
  }
}



  return (
    <div style={{
      position: 'absolute',
      margin: -10,
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '',
      minHeight: '110vh',
      minWidth: '210vh',
      backgroundColor:'#eef2f3',
      backgroundImage:`url(${girl})`,
      backgroundAttachment: 'fixed', // Fix the background image
      
    }}>

    <div style={{position: 'relative',}}>
    <form action="" method="post" onSubmit={haddleSubmit}>
      <h3 style={{  display: 'flex',justifyContent: 'center',fontFamily:'monospace',fontSize:'20px',color:'black'}}>Create Your Status</h3>
      
      <Box
        sx={{display: 'flow',
        flexWrap: 'wrap',
        '& > :not(style)': { mt:3,mb:3, width: 510,height: 270,color:'#B2BABF' ,
        backgroundImage: `url(${aa})`
        },}}>
        
        <Box component="form" sx={{'& > :not(style)': { ml:4, mt:3, width: '50ch',border:"ButtonText"},}} noValidate autoComplete="off" >
          
             {/* <Select
                label="Workout State"
                placeholder="Workout Status"
                value={formData.workoutStatus}
                name="workoutStatus"
              >
                <MenuItem value="Planned">Planned</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select> */}

              <TextField
                id="standard-basic"
                label="Workout Status"
                value={formData.workoutState}
                onChange={handleChange}
                name="workoutState"
              />
              <br />
              <TextField
                id="standard-basic"
                label="Workout Status description"
                value={formData.description}
                onChange={handleChange}
                name="description"
              />
              <br/>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={formData.date}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
          <br />
        </Box>
      </Box>
       <Box
        sx={{
          display: 'flow',
          flexWrap: 'wrap',
          '& > :not(style)': {
            mt:3,
            width: 510,
            height: 350,
            backgroundImage:`url(${aa})`
          },
        }}>

        {workoutPlans.map((plan, index) => (
          <Paper key={index} elevation={3}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { ml: 4, mt: 3, width: '50ch', border: "ButtonText" },
                }}
                noValidate
                autoComplete="off"
              >
                  <TextField 
                    label="Name"
                    value={plan.name}
                    onChange={(e) => handleInputChange(e, index, "name")}
                  />
                <br />
                  <TextField
                    type="number"
                    label="Completed"
                    value={plan.completed}
                    onChange={(e) => handleInputChange(e, index, "completed")}
                  />
                <br />
                  <TextField
                    type="number"
                    label="Burned Calories"
                    value={plan.burnedCalories}
                    onChange={(e) => handleInputChange(e, index, "burnedCalories")}
                  />
              </Box>
            <br />
            <br />
              <Button
                variant="contained"
                color="error"
               startIcon={<DeleteIcon />}
                onClick={() => handleRemoveCard(index)} sx={{ marginLeft: 4 }}
              >
                Remove
              </Button>
          </Paper>
        ))}
      </Box> 
      <br />
      <Button color="inherit" variant="contained" onClick={handleAddCard} sx={{ marginLeft: 3,mb:5 }}>New Workout</Button>
      <Button color="inherit" variant="contained" type="submit" sx={{ marginLeft: 3,mb:5 }}>Submit</Button>
      </form>
      
      </div>
      
    </div>
  );
}

export default SharedWorkoutStatus;
