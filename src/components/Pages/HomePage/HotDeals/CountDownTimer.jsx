import React from "react";
import "./Deals.css"
import { Grid, Typography } from "@mui/material";
const CountDownTimer = () => {
  const [timer, setTimer] = React.useState({
    days: 220,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        const { days, hours, mins, secs } = prevTimer;
        let updatedSecs = secs - 1;
        let updatedMins = mins;
        let updatedHours = hours;
        let updatedDays = days;

        if (updatedSecs < 0) {
          updatedMins -= 1;
          updatedSecs = 59;
        }
        if (updatedMins < 0) {
          updatedHours -= 1;
          updatedMins = 59;
        }
        if (updatedHours < 0) {
          updatedDays -= 1;
          updatedHours = 23;
        }

        return {
          days: updatedDays,
          hours: updatedHours,
          mins: updatedMins,
          secs: updatedSecs,
        };
      });
    }, 1000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid container spacing={3}>
    <Grid item className="circleContainer">
        <div className="timerContainer">
            <span className="circle">{timer.days}</span>
            <Typography variant="body2">DAYS</Typography>
        </div>
    </Grid>
   
    <Grid item className="circleContainer">
        <div className="timerContainer">
            <span className="circle">{timer.hours}</span>
            <Typography variant="body2">HRS</Typography>
        </div>
    </Grid>
   
    <Grid item className="circleContainer">
        <div className="timerContainer">
            <span className="circle">{timer.mins}</span>
            <Typography variant="body2">MINS</Typography>
        </div>
    </Grid>
   
    <Grid item className="circleContainer">
        <div className="timerContainer">
            <span className="circle">{timer.secs}</span>
            <Typography variant="body2">SECS</Typography>
        </div>
    </Grid>
</Grid>

  );
};

export default CountDownTimer;
