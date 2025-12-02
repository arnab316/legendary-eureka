// import { useEffect } from "react";
// import { logout } from "@/api/authApi"; // your logout API
// import Cookies from "js-cookie";

// const INACTIVITY_LIMIT = 10 * 60 * 1000; // 10 minutes

// export const useAutoLogout = () => {
//   useEffect(() => {
//     let timer: ReturnType<typeof setTimeout>;

//     const resetTimer = () => {
//       clearTimeout(timer);
//       timer = setTimeout(handleLogout, INACTIVITY_LIMIT);
//     };

//     const handleLogout = () => {
//       logout() // call your API
//         .finally(() => {
//           Cookies.remove("User"); // remove cookie
//           window.location.href = "/login"; // redirect to login
//         });
//     };

//     // Listen for user activity
//     window.addEventListener("mousemove", resetTimer);
//     window.addEventListener("keydown", resetTimer);
//     window.addEventListener("click", resetTimer);
//     window.addEventListener("scroll", resetTimer);

//     // Start timer on mount
//     resetTimer();

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("mousemove", resetTimer);
//       window.removeEventListener("keydown", resetTimer);
//       window.removeEventListener("click", resetTimer);
//       window.removeEventListener("scroll", resetTimer);
//     };
//   }, []);
// };






// useAutoLogout.ts
import { useEffect } from "react";
import { removeAuthCookies } from "@/utils";
const INACTIVITY_LIMIT = 10 * 60 * 1000; // 10 minutes

export const useAutoLogout = () => {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        window.location.href = "/login"; 
        removeAuthCookies();
        
      }, INACTIVITY_LIMIT);
    };

    // Listen for user activity
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("scroll", resetTimer);

    // Start timer on mount
    resetTimer();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, []);
};