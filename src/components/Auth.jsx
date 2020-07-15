// import React from "react";
// // Authetification
// const Auth = () => {
//   const initialState = {
//     isAuthenticated: !!localStorage.getItem("token"),
//     token: localStorage.getItem("token") || {},
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "LOGIN":
//         localStorage.setItem("token", action.payload.data.token);
//         return {
//           ...state,
//           isAuthenticated: true,
//           token: action.payload.data.token,
//         };
//       case "LOGOUT":
//         localStorage.clear();
//         return {
//           ...state,
//           isAuthenticated: false,
//           token: null,
//         };
//       default:
//         return state;
//     }
//   };
// };

// export default Auth;
