import React from 'react';

function PostRequest() {
    const data = {
                    "LANGUAGEID": "vi-VN",
                    "MA_CTY": "DHS",
                    "PARENTID": "01.04.00"
                };

    fetch('https://api.dhsoft.com.vn/api/HomePage/GetListDetailPage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(res => {
        console.log('Successfully', res);
    })
    .catch((error) => {
        console.error('Error', error);
        
    });

    return (
        <h1>hello guys</h1>
    )
}

export { PostRequest };