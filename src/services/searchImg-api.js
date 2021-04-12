import axios from "axios";

// const API_KEY = "81ed01ec72254f788a832404a1da2109";
const API_KEY = "20192065-81ed01ec72254f788a832404a1da2109";
export const getImages = (query = "", page = 1) => {
  const path = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(path);
};

export const someFetch = () => {};
