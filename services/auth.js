export function loginUser(axios, { email, phone, password }) {
  const data = {
    email,
    phone,
    password,
  };

  const headers = {
    Approle: "web",
  };

  axios.post("/auth/login", data, { headers });
}

export function registerUser(
  axios,
  { name, lastname, email, phone, password, gender, password_confirmation }
) {
  const data = {
    name,
    phone,
    email,
    lastname,
    password,
    password_confirmation,
    gender,
  };

  const headers = {
    Approle: "web",
  };

  axios.post("/auth/register", data, { headers });
}

export default {
  loginUser,
  registerUser,
};
