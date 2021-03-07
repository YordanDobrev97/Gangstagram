import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class LoginService {
  static login = async (email, password) => {
    if (!email || !password) {
      return false;
    }

    const data = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };

    await fetch("https://localhost:5001/api/users/Login", requestOptions)
      .then((r) => {
        return r.json();
      })
      .then((userId) => {
        cookies.set("userId", userId, { maxAge: 24 * 60 * 60 });
      });
    return true;
  };
}
