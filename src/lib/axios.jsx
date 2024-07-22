import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8010/proxy/api/v1",
});

export const tokenCurr =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzIxMzMyMTg0LCJpYXQiOjE3MjEzMjg1ODQsInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.3KcvTl7HgLx7xPv5IpRgjfBgKYA-dTfYE9whKtEyfj4";
