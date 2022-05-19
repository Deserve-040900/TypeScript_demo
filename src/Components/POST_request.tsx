import React, { useState, useEffect } from 'react';
import PostList from './postList';

function PostRequest() {
    const [listJ, setListJ] = useState([]);

    useEffect(() => {
        const data = {
            "LANGUAGEID": "vi-VN",
            "MA_CTY": "DHS",
            "PARENTID": "01.04.00"
        };

        async function fetchPost() {
            fetch('https://api.dhsoft.com.vn/api/HomePage/GetListDetailPage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(res => setListJ(res))
                .catch((err) => {
                    console.error('Error', err);
                });
        }

        fetchPost();
    }, []);

    return (
        <>
            <PostList post={listJ} />
        </>
    );
}

export { PostRequest };