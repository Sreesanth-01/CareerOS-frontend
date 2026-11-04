import { jwtDecode } from "jwt-decode";

export const isTokenValid = (token) => {
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);

        // JWT exp is in seconds; Date.now() is in milliseconds.
        return decoded.exp * 1000 > Date.now();
    } catch (error) {
        return false;
    }
};

export const clearAuth = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};