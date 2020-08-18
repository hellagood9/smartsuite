import axios from "axios";

const URL = process.env.REACT_APP_API;

export const signin = async (email, password) => {
  try {
    const response = await axios.post(`${URL}/users/signin`, {
      email,
      password,
    });

    const { data, status } = response;
    console.log("data service", data);

    // localStorage.setItem("api_token", data.api_token);

    if (status !== 200) {
      throw new Error();
    }

    return data;
  } catch (error) {
    console.error(error);
    return { msg: error.message };
  }
};

export const signup = async (name, email, password) => {
  const NewUser = { name, email, password };

  const response = await axios.post(`${URL}/signup`, NewUser);

  const { data, status } = response;

  console.log("RESPONSE", response);
  // localStorage.setItem("api_token", data.api_token);

  if (status !== 200) {
    throw new Error();
  }

  return data;
};

// export const logout = async () => {
//   try {
//     const response = await axios.post(
//       `${URL}/logout`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("api_token")}`
//         }
//       }
//     );

//     const {
//       data: { data, success }
//     } = response;

//     localStorage.removeItem("api_token");

//     if (!success) {
//       throw new Error();
//     }

//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };
