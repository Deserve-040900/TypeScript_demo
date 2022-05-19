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

    const post: any = { listJ }

    return (
        <div>
            <div className="w3-responsive">
                <table className="table grid text-secondary bg-light w3-border-gray">
                    <tbody>
                        <tr className="text-dark">
                            <th>DETAILID</th>
                            <th>TYPEID</th>
                            <th>TITLE</th>
                            <th>TITLECOLOR</th>
                            <th>CONTENT</th>
                            <th>CONTENTCOLOR</th>
                            <th>SHOWBTN</th>
                            <th>BTNCOLOR</th>
                            <th>BTNTEXT</th>
                            <th>BTNLINK</th>
                            <th>IMGURL</th>
                            <th>TAG</th>
                            <th>POSITIONCONTENT</th>
                            <th>IMGTYPE</th>
                            <th>LOGOURL</th>
                            <th>LANGUAGEID</th>
                            <th>VIDEOURL</th>
                            <th>ROWEXPAND</th>
                            <th>ROWLEVEL</th>
                            <th>CDATE</th>
                        </tr>
                        {post.map((p: any) => (
                            <PostList
                                key={p.PARENTID}
                                p={p}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export { PostRequest };