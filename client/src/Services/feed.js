import Cookies from "js-cookie";

export default class FeedService {
  static getAll = async () => {
    return fetch("https://localhost:5001/api/posts/all", {
      headers: {
        "X-User-Token": Cookies.get("userId"),
        "Content-Type": "application/json",
      },
    });
  };
}
