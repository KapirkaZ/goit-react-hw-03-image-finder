import axios from "axios";

const API_KEY = "21303278-c935acbd5da792aa991cc27e4";
export const getImages = (query = "", page = 1) => {
  const path = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(path);
};

export const someFetch = () => {};
