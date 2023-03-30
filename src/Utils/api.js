import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGM4YjE5ZjMyNDUwNjA3MDFlYzRmZTQ1MDcxNWJmMiIsInN1YiI6IjY0MjE4MzU5NTM0NjYxMDA4NTdhNjkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xMRBF8oBvW6_FAb8mjlu4AO0t3XxVTBTiwXFy-VPN34';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};