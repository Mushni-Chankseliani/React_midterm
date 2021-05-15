
const api = 'https://jsonplaceholder.typicode.com';

export class API_SERVICE {
  static async getCommentsAsync({ start = 30, limit = 10 }) {
    const url = `${api}/comments?_start=${start}&_limit=${limit}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      return result;
    } catch (err) {
      console.log(err);
    }
  }

  static async getPostsAsync({ start = 30, limit = 10 }) {
    const url = `${api}/posts?_start=${start}&_limit=${limit}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default API_SERVICE;
