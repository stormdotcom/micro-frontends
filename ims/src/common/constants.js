export const BROWSER_STORAGE = {
  ACCESS_TOKEN: "ims_user",
  REFRESH_TOKEN: "refresh_token"
};


export const REQUEST_METHOD = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
  FILE: "FILE",
  VIDEO: "VIDEO"
};


export const HTTP = {
  API_URL: "http://localhost:8000",
  AUTH_URL: "http://localhost:8000",
  HTTP_HEADERS: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};
export const API_URL = "http://localhost:8000";


export const EVENT_TYPES = {
  LOGGED_IN_SESSION: "loggedIn_session",
  COURSE_VISITED: "course_visited",
  PROGRESS_UPDATE: "progress_update",
  LECTURE_START: "lecture_start",
  LECTURE_PAUSE: "lecture_pause",
  SESSION_DURATION: "session_duration",
  PAGE_VISIT_DURATION: "visit_duration"
};


export const UI_SEARCH_LOCATION = [
  { title: "Profile", subTitle: "profile view and edit ", slug: "./home/profile/details", type: "page" },
  { title: "My Learnings", subTitle: "see your course list", slug: "./home/profile/my-courses", type: "page" },
  { title: "Settings", subTitle: "view settings", slug: "./home/profile/settings", type: "page" },
  { title: "Privacy and Policy", subTitle: "read our privacy and policy ", slug: "./home/profile/privacy", type: "page" }
];


export const OPENAI_API_KEY = "sk-9HRQZCT9VxTaiPJk2suRPspl0HNlR793JeesenFEqwT3BlbkFJuxAPkOOrroPbSQkOguYS8gbl6SmvKYaJk9vTCQ9uIA";
export const OCR_API = "K87116317588957";
