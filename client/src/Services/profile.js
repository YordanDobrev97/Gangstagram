export default class ProfileService {
  static getUserPosts = (userId, isReadToken) => {
    return fetch("https://localhost:5001/api/posts/getUserPosts", {
      method: "GET",
      headers: {
        "X-User-Token": userId,
        "X-Is-Read-Token": isReadToken,
      },
    });
  };

  static removeById = (postId) => {
    const data = JSON.stringify({
      postId: postId,
    });

    return fetch("https://localhost:5001/api/posts/deleteById", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
  };
}
