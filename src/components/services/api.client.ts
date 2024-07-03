import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d61ba55a183f4d2980131905a707b433",
  },
});
