import Axios from "axios";
const url = "http://192.168.1.10:4000/data";

export const getData = () => {
  return new Promise((resolve, reject) => {
    Axios.get(url)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const postData = email => {
  return new Promise((resolve, reject) => {
    Axios.post(url, { email })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
