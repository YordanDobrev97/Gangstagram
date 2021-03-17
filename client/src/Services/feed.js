import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class FeedService {
  static getAll = async () => {
    return fetch("https://localhost:5001/api/posts/all", {
      headers: {
        "X-User-Token": cookies.get("userId"),
        "Content-Type": "application/json",
      },
    });
  };
}
