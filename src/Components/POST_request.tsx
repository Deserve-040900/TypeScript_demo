import React from 'react';

function PostRequest() {
    const res = 'http://localhost:3000/demo';

    fetch(res).then(function(response) {
    return response.json();
    })
    .then(function(posts){
    console.log(posts);
    });   

    return (
        <h1>hello guys</h1>
    )
}

export { PostRequest };