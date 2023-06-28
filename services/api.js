
import axios from 'axios';

const baseUrl = "https://app.jala.tech/"
const bearer = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzNGQ5Nzg0ZjZhNzRjNmFlZjI1ODRlNjI5YmRiNDk5ZDIzNTNiNjQ1ZGMzM2QxNWM1MzJlMWRmZGNkNTFjNDFhZDA3MTY2Y2M0MjcwZGFjIn0.eyJhdWQiOiIxIiwianRpIjoiYzM0ZDk3ODRmNmE3NGM2YWVmMjU4NGU2MjliZGI0OTlkMjM1M2I2NDVkYzMzZDE1YzUzMmUxZGZkY2Q1MWM0MWFkMDcxNjZjYzQyNzBkYWMiLCJpYXQiOjE2NzA0NzE1NTcsIm5iZiI6MTY3MDQ3MTU1NywiZXhwIjoxNzAyMDA3NTU3LCJzdWIiOiI3NyIsInNjb3BlcyI6W119.de53bq9RIwzpyfWGRK4LPLwdnkQXLZm19Q7o6mx9pBrsGYaOhjuw55F0qBbO6e5WVCrz3VOeAgb8zcVc4JYFpLmzFihFamT3Uf7EuDpXx7xpleYVb1n14zX9XrNg2Bum8irjxXqADgJDDnjb4Yvjh_EZYMfwRBk5gJjIZ7r7KiW3rz3kVbthaoRy6aayPP2rz_PXDeGAkF-SV4nwfZXRUT1_YWuTPRfy9KN8RsK1msqQre1qlKJE1IDFPi8DXrHP8oLuN0XHa9babTFPcCg9xO88YKq4a46IqVMsl-qEyqAukA5dxcC73cFuFo8IOjt2m0toIz1wdZdShz-3IAgOpqwi-7WTJjFRwrdazBMgrHTl0sNiI4U6ONoVaPGlmUxVYmdRbQ2QZckXFAN6o6mwAwB_zxQsEg_CJYgZbCxAcNj9yXYaqtHNchj_1HlcvbE7LXBffLKmJ9jrXFg-3STGypwt35wkZiyS8JkoHLhTg_C2Efad4_wMWuPhSCirrqfq6HszD5dCRDG69cl1IMY-kkShzagQEz2KybFVhoCbC1oImYgqTsp_w81W9-v5gb23Z38AY9GdCEKOPMpIEg1DMaYQaTe8x6_1nRxf_XjsSBRQN935Qr2AKIGir9uox0hx-1Ji7wH2TwEyclYuf_0uMVCEOBpi2aImo5neMmWBggs"

export const getPriceList = (page, size) => {
    return new Promise((resolve, reject) => {
        axios.get(
            `${baseUrl}api/shrimp_prices?per_page=${size}&page=${page}/`,{
                headers: {
                    Authorization: `Bearer ${bearer}`,
                    // Accept: "application/json",
                    "access-control-allow-origin": "*",
                },
        }).then((res) => {
            resolve(res)
        })
        .catch((err) => {
            reject(err)
        })
    })
}


export const getInfoNews = (page, keys, size) => {
    let defaultBool = [{ field: "enable", key: true }];
  
    var data = {
      search: [],
      tagInSearch: [
        {
          field: "tags",
          key: keys,
        },
      ],
      defaultBool: defaultBool,
    };
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${baseUrl}main_a/info/get_info?size=${size}&page=${page}&sort=updateTime&dir=-1`,
          data,
          {
            headers: {
              Authorization: `Bearer ${bearer()}`,
            },
          }
        )
        .then((res) => {
          let token = res.headers.authorization;
          if (!res.headers.authorization) {
            token = localStorage.getItem("token_redux");
          }
          if (token) {
            if (!token.includes("Bearer")) {
              token = token.replaceAll("Bearer ", "");
            }
            localStorage.setItem("token_redux", token.replaceAll("Bearer ", ""));
          }
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          ErrorHandler(err);
          reject(err);
        });
    });
  };