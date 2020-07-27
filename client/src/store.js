import { createStore, applyMiddleware, compose } from "redux";
import catalogReducer from "./reducers/catalogReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const initialState = {
//   carrito: [
//     {image:'img2', name:'Galaxy', description:'Fondo Negro con Galaxias', price: 10, stock: 1, id:1, categories: 'Zapatillas'},
//     {image:'img2', name:'Palms', description:'Fondo Blanco con Palmeras', price: 20, stock: 2, id:2, categories: 'Zapatillas'},
//     {image:'img4', name:'Bulgaro', description:'Bulgaros Violetas', price: 30, stock: 3, id:3, categories: 'Remeras'},
//     {image:'img4', name:'Black', description:'Toda negra', price: 40, stock: 4, id:4, categories: 'Remeras'},
//     {image:'img4', name:'Blanca', description:'Toda negra', price: 40, stock: 4, id:5, categories: 'Remeras'},
//             ],
//   carritoAComprar: [{'id: 2, precio: $1500', 'Cantidad: 2'}.
//                      {'id: 4, precio: $1800', 'Cantidad: 4'}]
// };

const store = createStore(catalogReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
