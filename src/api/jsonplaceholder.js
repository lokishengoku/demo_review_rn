import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // headers: {
  //   Authorization: 'Bearer <API_KEY>'
  // }
});

export default api;

//===================REQUEST========================
const postsRequest = async () => {
  try {
    const json = await api.get(
      "/posts"
      // {
      //   params: {
      //     limit: 50   //URL + '?limit=50'
      //   }
      // },
    );
    console.log(json.data);
  } catch (error) {
    console.log("An error occurred: " + error);
  }
};
