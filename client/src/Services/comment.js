import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class CommentService {
  static add = async (comment, postId) => {
    const data = JSON.stringify({
      postId,
      comment,
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
      "https://localhost:5001/api/posts/addComment",
      requestOptions
    );
    return result.status === 200;
  };
}
