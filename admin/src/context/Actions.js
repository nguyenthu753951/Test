export const LoginStart = (adminCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (admin) => ({
  type: "LOGIN_SUCCESS",
  payload: admin,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const UpdateStart = (adminCredentials) => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (admin) => ({
  type: "UPDATE_SUCCESS",
  payload: admin,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
