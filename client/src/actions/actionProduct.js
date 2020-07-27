export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const FILTER_CATEGORY = 'FILTER_CATEGORY'
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const GET_ALL_PRODUCT_WITHOUT_FILTER = 'GET_ALL_PRODUCT_WITHOUT_FILTER';
export const AGREGAR_ITEM_A_CARRITO = 'AGREGAR_ITEM_A_CARRITO';
export const ELIMINAR_ITEM_A_CARRITO = 'ELIMINAR_ITEM_A_CARRITO';
export const RESTAR_ITEM_EN_CARRITO = 'RESTAR_ITEM_EN_CARRITO';
export const GET_CARRITO_DEL_STORAGE = 'GET_CARRITO_DEL_STORAGE';
export const ADD_USER = 'ADD_USER'
export const GET_USER = 'GET_USER'
export const DELETE_USER = 'DELETE_USER'
export const ENVIAR_COMPRA = 'ENVIAR_COMPRA'
export const GET_ALL_ORDENES = 'GET_ALL_ORDENES'
export const GET_ORDER_DETAILS = 'GET_ORDER_DETAILS'
export const LOGIN_USUARIO = 'LOGIN_USUARIO'
export const SEND_REVIEWS = 'SEND_REVIEWS'
export const LOG_OUT = 'LOG_OUT'
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'
export const FILTER_ORDER = 'FILTER_ORDER'







export function getProduct (keyword) {
    return function(dispatch) {
      return fetch("http://localhost:3001/search/" + keyword)
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: GET_PRODUCT,
              payload: json });
        });
    };
  }


  // getAllProduct , te trae todos los productos que tengan STOCK
  export function getAllProduct () {
    return function(dispatch) {
      return fetch("http://localhost:3001/catalogue")
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: GET_ALL_PRODUCT,
              payload: json });
        });
    };
  }

  // getAllProductwithoutFilter, te trae todos los productos tengan o no tengan STOCK
  export function getAllProductwithoutFilter () {
    return function(dispatch) {
      return fetch("http://localhost:3001/product")
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: GET_ALL_PRODUCT_WITHOUT_FILTER,
              payload: json });
        });
    };
  }


  export function getAllCategory () {
    return function(dispatch) {
      return fetch("http://localhost:3001/categories")
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: GET_ALL_CATEGORY,
              payload: json });
        });
    };
  }


  export function filterCategory (category) {
    return function(dispatch) {
      return fetch('http://localhost:3001/catalogue/'+ category)
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: FILTER_CATEGORY,
              payload: json });
        });
    };
  }


export function getProductDetail(id) {
     return function(dispatch) {
         return fetch('http://localhost:3001/product/' + id)
            .then(response => response.json())
            .then(json => {
                 dispatch({
                 type: GET_PRODUCT_DETAIL,
                   payload: json });
        });
    };
  }

    export function addCategory (category) {
    return function(dispatch) {
      return   fetch('http://localhost:3001/categories/add', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: category,
    })
  }).then(category => {
            dispatch({
                type: ADD_CATEGORY,
                payload: category });
          });
      };
    }

    export function addProduct (producto) {
      return function(dispatch) {
        return   fetch('http://localhost:3001/product/add', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    })
    .then(response => response.json())
    .then(producto => {
              dispatch({
                  type: ADD_PRODUCT,
                  payload: producto });
            });
        };
      }

  export function agregarItemACarrito (id){
    return function(dispatch) {
      return fetch('http://localhost:3001/product/' + id)
         .then(response => response.json())
         .then(json => {
              dispatch({
              type: AGREGAR_ITEM_A_CARRITO,
                payload: json});
     });
 };
}

export function EliminarItemDeCarrito (id){
  return function(dispatch) {
    return fetch('http://localhost:3001/product/' + id)
       .then(response => response.json())
       .then(json => {
            dispatch({
            type: ELIMINAR_ITEM_A_CARRITO,
              payload: json});
   });
};
}

export function RestarItemEnCarrito (id){
  return function(dispatch) {
    return fetch('http://localhost:3001/product/' + id)
       .then(response => response.json())
       .then(json => {
            dispatch({
            type: RESTAR_ITEM_EN_CARRITO,
              payload: json});
   });
};
}


      export function deleteProduct (id) {
        return function(dispatch) {
          return   fetch('http://localhost:3001/product/' , {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id,
        })
      })
      .then(response => response.json())
      .then(producto => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: producto });
              });
          };
        }

        export function updateProduct(id, product){
        return function(dispatch) {
          return   fetch('http://localhost:3001/product/' + id , {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)})
        .then(response => response.json())
        .then(productosActualizados => {
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: productosActualizados });
              });
          };
        }

        export function getCarritoDelStorage() {
         let data  = JSON.parse(localStorage.getItem('carrito'))
           return ({
                type: GET_CARRITO_DEL_STORAGE,
                  payload: data });
       }


// USEEEEEEEEEERRRRRRRRR


export function addUser (user) {
    return function(dispatch) {
      return   fetch('http://localhost:3001/user/add', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(user => {
            dispatch({
                type: ADD_USER,
                payload: user });
          });
      };
    }
    export function getUser() {
        return function(dispatch) {
            return fetch('http://localhost:3001/user')
               .then(res => res.json())
               .then(json => {
                    dispatch({
                    type: GET_USER,
                      payload: json });
           });
       };
     }

     export function deleteUser (id) {
      return function(dispatch) {
        return   fetch('http://localhost:3001/user/' , {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
      })
    })
    .then(response => response.json())
    .then(user => {
              dispatch({
                  type: DELETE_USER,
                  payload: user });
            });
        };
      }


      export function updateUser(id, user){
        return function(dispatch) {
          return   fetch('http://localhost:3001/user/' + id , {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)})
        .then(response => response.json())
        .then(usersActualizados => {
                dispatch({
                    type: UPDATE_USER,
                    payload: usersActualizados });
              });
          };
        }



     //////// ORDER////////
     export function enviarCompra (carrito, id) {
       alert('Gracias por tu compra!')
      return function(dispatch) {
        return   fetch('http://localhost:3001/user/'+`${id}`+'/order', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      carrito,
      })
    })
    .then(response => response.json())
    .then(orden => {
              dispatch({
                  type: ENVIAR_COMPRA,
                  payload: orden });
            });
        };
      }

      export function getAllOrdenes () {
        return function(dispatch) {
          return fetch("http://localhost:3001/search/")
            .then(response => response.json())
            .then(json => {
              dispatch({
                  type: GET_ALL_ORDENES,
                  payload: json });
            });
        };
      }

      export function getOrderDetails(id) {
        return function(dispatch) {
            return fetch('http://localhost:3001/orderdetail/' + id)
               .then(response => response.json())
               .then(json => {
                    dispatch({
                    type: GET_ORDER_DETAILS,
                      payload: json });
           });
       };
     }

     export function updateOrder(userId, orderId, status){
     
      return function(dispatch) {
        return   fetch('http://localhost:3001/user/' + userId + '/order/' + orderId , {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(status)})
      .then(response => response.json())
      .then(ordenesActualizadas => {
              dispatch({
                  type: UPDATE_ORDER,
                  payload: ordenesActualizadas });
            });
        };
      }

      export function deleteOrder (id) {
        console.log(id, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        return function(dispatch) {
          return   fetch('http://localhost:3001/user/order/' + id, {
        method: 'delete',
        })
      .then(response => response.json())
      .then(ordenes => {
                dispatch({
                    type: DELETE_ORDER,
                    payload: ordenes });
              });
          };
        }


        export function filterOrder (status) {
          return function(dispatch) {
            return fetch('http://localhost:3001/user/order/'+ status)
              .then(response => response.json())
              .then(json => {
                dispatch({
                    type: FILTER_ORDER,
                    payload: json });
              });
          };
        }

      

     



     export function loginUsuario (usuario) {

       return function(dispatch) {
         return   fetch('http://localhost:3001/auth/login/', {
           method: 'post',
           //credentials: 'include',
           headers: {
         'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        })
        .then(response => response.json())
        .then(user => {
           dispatch({
             type: LOGIN_USUARIO,
             payload: user
           });
             return user;
           });

         };
       }

       export function logOut () {
        return function(dispatch) {
          return   fetch('http://localhost:3001/auth/logout')
         .then(userNull => {
            dispatch({
              type: LOG_OUT,
              payload: userNull
            });
            });
 
          };
        }
 


       // REVIEWS

       export function sendReviews (value) {
        return function(dispatch) {
          return   fetch('http://localhost:3001/product/'+`${value.productId}`+'/review', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value),
      })
      .then(response => response.json())
      .then(reviews => {
                dispatch({
                    type: SEND_REVIEWS,
                    payload: reviews });
              });
          };
        }

   

            export function getAllReviews (id) {
              return function(dispatch) {
                return fetch('http://localhost:3001/product/'+ id +'/review')
                  .then(response => response.json())
                  .then(json => {
                    dispatch({
                        type: GET_ALL_REVIEWS,
                        payload: json });
                  });
              };
            }

        