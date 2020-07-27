import React from 'react';
import {addUser} from '../../actions/actionProduct'
import {useDispatch} from 'react-redux'
import './createForm.css';

export function validate(input) {
  let errors = {};
  if (!input.password) {
    errors.password = 'Contraseña requerida';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Contraseña invalida';
  }
  if (!input.email) {
    errors.email = 'Nombre de usuario requerido';
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = 'Nombre de usuario invalido';
  }
  return errors;
};
 export default function FormCrearCuenta(user) {
  const [input, setInput] = React.useState({
    firstName: '',
    lastName: '',
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
  const dispatch = useDispatch()
  const handleSubmit = function (e) {
    e.preventDefault();
    dispatch(addUser(input))
    alert('tu cuenta fue creada con exito!')
  }
  return (
    <div class="container">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div>
        <form class="form-group" onSubmit={handleSubmit}>
          <div>
            <input placeholder="Nombre" className={errors.firstName && 'danger'} type='text' name='firstName' value={input.firstName} onChange={handleInputChange} />
            {errors.firstName && <p className='danger'>{errors.firstName}</p>}
          </div><p></p>
          <div>
            <input placeholder="Apellido" className={errors.lastName && 'danger'} type='lastName' name='lastName' value={input.lastName} onChange={handleInputChange} />
            {errors.lastName && <p className='danger'>{errors.lastName}</p>}
          </div><p></p>
          <div>
            <input placeholder="Email" className={errors.email && 'danger'} type='email' name='email' value={input.email} onChange={handleInputChange} />
            {errors.email && <p className='danger'>{errors.email}</p>}
          </div><p></p>
          <div>
            <input placeholder="Contraseña" className={errors.password && 'danger'} type='password' name='password' value={input.password} onChange={handleInputChange} />
            {errors.password && <p className='danger'>{errors.password}</p>}
            </div><p></p>
            <input class="btn btn-primary" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}
