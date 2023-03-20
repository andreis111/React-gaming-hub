import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "760080479efb48ed8f115824770d234c",
  },
});
