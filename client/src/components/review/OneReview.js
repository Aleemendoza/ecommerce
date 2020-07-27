import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import './OneReview.css';




export default function OneReview(props) {
  return (
    <div>
      <div class="container">
        <p><strong>Nombre: </strong> {props.name} </p>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={props.rate} readOnly />
        </Box>
        <p><strong>Fecha: </strong>  {props.date}       </p>
        <p><strong>Descripcion: </strong> {props.description}  </p>
      </div>







      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Pristine</Typography>
        <Rating name="pristine" value={null} />
      </Box> */}
    </div>

  );
}
