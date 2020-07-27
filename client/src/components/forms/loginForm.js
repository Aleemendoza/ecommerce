import React from 'react';
import {loginUsuario} from '../../actions/actionProduct'
import {connect} from 'react-redux'
import './loginForm.css';

export function validate(input) {
  let errors = {};
  if (!input.email) {
    errors.email = 'Email requerido';
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = 'Email invalido';
  }
  if (!input.password) {
    errors.password = 'Contraseña requerida';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Contraseña invalida';
  }
  return errors;
};

 function FormUsuario(props) {
  const [input, setInput] = React.useState({
    email: '',
    password: ''
  });
  const [errors, setError] = React.useState({});

  const handleInputChange = function (e) {
    setError(validate({
      ...input,
      [e.target.name]: e.target.value,
    }));
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    props.loginUsuario(input)
    .then( data => {
      if(data) {
      props.history.push('/catalogue')
      }

    // this.props.logInUser(state.email, state.password).then( data => {
    //   if(!data.succes) setState: error
    //   } else {
    //   this.props.history.push('/products')
    //   }
  })}
  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Email" className={errors.email && 'danger'} type='text' name='email' value={input.email} onChange={handleInputChange} />
          {errors.email && <p className='danger'>{errors.email}</p>}
        </div>
        <p></p>
        <div>
          <input placeholder="Password" className={errors.password && 'danger'} type='password' name='password' value={input.password} onChange={handleInputChange} />
          {errors.password && <p className='danger'>{errors.password}</p>}
        </div>
        <p></p>
        <input class="btn btn-primary" type="submit" value="Enviar" />
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
  };
}


export default connect( mapStateToProps, {loginUsuario} )(FormUsuario);
