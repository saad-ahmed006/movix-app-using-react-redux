import React from 'react'
import { useState, useEffect } from "react";
import { fetchDataFromApi } from '../Utils/api';

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading('Loading...')
        setData(null);
        setError(null);


        fetchDataFromApi(url).then((res) => {
            setLoading(false);
            setData(res);
        }).catch((err) => {
            setLoading(false);
            setError("Something went wrong!");
        })


    }, [url])

    return (
        {data, loading, error}
    )
}
