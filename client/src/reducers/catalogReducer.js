import {
  GET_PRODUCT,
  FILTER_CATEGORY,
  GET_ALL_PRODUCT,
  GET_PRODUCT_DETAIL,
  ADD_CATEGORY,
  GET_ALL_CATEGORY,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCT_WITHOUT_FILTER,
  AGREGAR_ITEM_A_CARRITO,
  ELIMINAR_ITEM_A_CARRITO,
  RESTAR_ITEM_EN_CARRITO,
  GET_CARRITO_DEL_STORAGE,
  GET_USER,
  ADD_USER,
  DELETE_USER,
  ENVIAR_COMPRA,
  GET_ALL_ORDENES,
  GET_ORDER_DETAILS,
  LOGIN_USUARIO,
  SEND_REVIEWS,
  LOG_OUT,
  GET_ALL_REVIEWS,
  UPDATE_USER,
  UPDATE_ORDER,
  DELETE_ORDER,
  FILTER_ORDER
 } from '../actions/actionProduct';

const initialState = {
 catalog: [],
 categories: [],
 carrito: [],
 user: [],
 reviews: [],
 ordenes: [],
 ordenDetails: [],
 usuarioLogueado: {}
};


 const catalogReducer = (state = initialState , action) => {
   console.log(action)

   switch (action.type) {

     case GET_PRODUCT:
         return {
           ...state,
           catalog: action.payload
         };

     case FILTER_CATEGORY:
       return {
         ...state,
         catalog: action.payload
       }
     case GET_ALL_PRODUCT:
       return {
         ...state,
         catalog: action.payload
       }
       case GET_ALL_PRODUCT_WITHOUT_FILTER:
       return {
         ...state,
         catalog: action.payload
       }
     case GET_ALL_CATEGORY:
       return {
         ...state,
          categories: action.payload
       }
     case GET_PRODUCT_DETAIL:
       return {
         ...state,
         catalog: action.payload
       }
     case ADD_CATEGORY:
       return {
         ...state,
         categories: [...state.categories,action.payload]
     }
     case ADD_PRODUCT:
       return {
         ...state,
         catalog: action.payload
     }
     case DELETE_PRODUCT:
       return {
         ...state,
         catalog: action.payload
     }
     case UPDATE_PRODUCT:
       return {
         ...state,
         catalog: action.payload
     }
     case AGREGAR_ITEM_A_CARRITO:
       return {
         ...state,
         carrito: [...state.carrito,action.payload]
     }
     case ELIMINAR_ITEM_A_CARRITO:
       var carritoNuevo = state.carrito.filter(producto => producto.id !== action.payload.id)
       return {
         ...state,
         carrito: carritoNuevo
     }
     case RESTAR_ITEM_EN_CARRITO:
       const indice = (element) => element.id === action.payload.id;
       var posicionIDEncontrado = state.carrito.findIndex(indice)
       var carritoNuevo= state.carrito.splice(posicionIDEncontrado, 1)
       return {
         ...state,
         carrito: [...state.carrito]
     }
     case GET_CARRITO_DEL_STORAGE:
       return {
         ...state,
         carrito: action.payload
     }
     case GET_USER:
       return {
         ...state,
         user : action.payload
     }
     case ADD_USER:
     return{
       ...state,
       user : [...state.user,action.payload]
     }
     case DELETE_USER:
       return {
         ...state,
         user: action.payload
     }
     case UPDATE_USER:
      return {
        ...state,
        user : action.payload
    }
     case ENVIAR_COMPRA:
       return {
         ...state,
         ordenes: action.payload
     }
     case GET_ALL_ORDENES:
       return {
         ...state,
         ordenes: action.payload
     }
     case GET_ORDER_DETAILS:
       return {
         ...state,
         ordenDetails: action.payload
       }
       case UPDATE_ORDER:
        return {
          ...state,
          ordenes: action.payload
        }
        case DELETE_ORDER:
          return {
            ...state,
            ordenes: action.payload
          }   
          case FILTER_ORDER:
            return {
              ...state,
              ordenes: action.payload
            }       

          
       
    case LOGIN_USUARIO:
      return {
        ...state,
        usuarioLogueado: action.payload
      }
      case LOG_OUT:
      return {
        ...state,
        usuarioLogueado: action.payload
      }
      case SEND_REVIEWS:
        return {
          ...state,
          reviews: action.payload
        }

        case GET_ALL_REVIEWS:
          return {
            ...state,
            reviews: action.payload
          }

      

     default:
       return state;
   }
 }


 export default catalogReducer;
