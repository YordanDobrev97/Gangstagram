export default class RegisterService {
  static register = async (username, email, password, repeatPassword) => {
    if (password !== repeatPassword) {
      return false;
    }

    const data = JSON.stringify({
      email,
      username,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: data,
    };

    await fetch("https://localhost:5001/api/users/Register", requestOptions)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        console.log(data);
      });

    return true;
  };
}
