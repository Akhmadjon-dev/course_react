import axios from "axios";

// const search = (query) => {
//     axios.get(`https://api.unsplash.com/search/photos/?client_id=Lbh2kK1d8Bb7CrEo6IaFsa-7D4YXQk-gq4BJ-fOsznE`, {
//         query
//     })
// }

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Lbh2kK1d8Bb7CrEo6IaFsa-7D4YXQk-gq4BJ-fOsznE",
  },
});
