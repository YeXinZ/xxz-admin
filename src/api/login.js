import http from "@/utils/fetch";

export function login(data) {
  return http.post("/user/login", data);
}

export function logout() {
  return http.post("/user/logout");
}

export function getInfo(token) {
  return http.get("/user/info", { token });
}
