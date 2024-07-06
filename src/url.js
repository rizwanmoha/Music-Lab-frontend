const backendUrl =
    window.location.hostname == 'localhost'
        ? "http://localhost:8000"
        : "https://music-labs-backend-v6.onrender.com";

export {backendUrl};