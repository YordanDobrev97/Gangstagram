import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class UserService {
  static follow = (followerId) => {
    const data = JSON.stringify(followerId);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-User-Token": cookies.get("userId"),
      },
      body: data,
    };

    return fetch("https://localhost:5001/api/users/follow", requestOptions);
  };

  static isFollow = (followerId) => {
    const data = JSON.stringify(followerId);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-User-Token": cookies.get("userId"),
      },
      body: data,
    };

    return fetch("https://localhost:5001/api/users/isFollow", requestOptions);
  };
}
