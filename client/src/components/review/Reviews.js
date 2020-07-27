import React from "react";
import Rating from "@material-ui/lab/Rating";
import { connect } from "react-redux";
import { sendReviews, getProductDetail } from '../../actions/actionProduct'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import {useEffect} from 'react'




function SimpleRating(props) {

  const [value, setValue] = React.useState({
    productId: 0,
    UserId: props.usuarioLogueado.user.id,
    rate: 2,
    description:''
  });

  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
      productId: props.producto.id

    });
  }

  // console.log(value.productId)

  function handleSubmit(e){
    e.preventDefault()
    props.sendReviews(value)

  }


  return (<div class="container">
    <form onSubmit={handleSubmit}>
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Reviews</Typography>
        <Rating
          name="rate"
          // value={value.rate}
          onChange={handleChange}
        />
      </Box>
      <div>
        <label>Comentario <br></br> </label>
      </div>
      {/* <p>Usuario: {props.usuarioLogueado}</p> */}
      <textarea
          name='description'
          // value={value.description}
          onChange={handleChange}
      ></textarea> <br></br>
       <button class="btn btn-warning btn-sm" type="submit"> Enviar comentario</button>

      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Pristine</Typography>
        <Rating name="pristine" value={null} />
      </Box> */}
    </div>
    </form>

    </div>
  );
}

function mapStateToProps(state) {
  return {
    producto: state.catalog,
    usuarioLogueado: state.usuarioLogueado
  };
}

export default connect(mapStateToProps, { sendReviews, getProductDetail })(SimpleRating);
