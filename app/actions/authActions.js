export const login = () => {
  return {
    type: "LOGIN"
  };
};

export const logout = () => {
  return {
    type: "LOGOUT"
  };
};

export default {
  login,
  logout
};
