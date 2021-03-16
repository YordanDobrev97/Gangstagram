import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class PostService {
  static create = async (title, description, image) => {
    const data = JSON.stringify({
      title,
      description,
      image,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-User-Token": cookies.get("userId"),
      },
      body: data,
    };

    const result = await fetch(
      "https://localhost:5001/api/posts/create",
      requestOptions
    );

    return result.status === 200;
  };

  static getById = async (id) => {
    const data = JSON.stringify({
      postId: id,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-User-Token": cookies.get("userId"),
      },
      body: data,
    };

    const result = await fetch(
      "https://localhost:5001/api/posts/getById",
      requestOptions
    );

    return result;
  };

  static like = async (data) => {
    return fetch("https://localhost:5001/api/posts/likePost", {
      method: "POST",
      headers: {
        "X-User-Token": cookies.get("userId"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
}
