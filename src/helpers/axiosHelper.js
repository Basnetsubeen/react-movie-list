import axios from "axios";

const apiEndPoint = "https://www.omdbapi.com/?i=tt3896198&apikey=f6b3e200&&";

export const fetchMovieInfo = async (title) => {
  try {
    const url = apiEndPoint + "t=" + title;

    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

// import axios from "axios";
// const apiEndPoint = "https://www.omdbapi.com/?i=tt3896198&apikey=f6b3e200&&";

// export const fetchMovieInfo = (title) => {
//   const url = apiEndPoint + "t=" + title;
//   const { data } = axios.get(url);
//   return data;
// };
