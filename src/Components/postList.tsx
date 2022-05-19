import React from 'react';
import PropStyle from 'prop-types';

PostList.propTypes = {
    post: PropStyle.array,
};

PostList.defaultProps = {
    post: [],
};

export default function PostList (props: any) {
    const { post } = props;
    return (
        <>
            {post.map((p: any) => (
                <tr key={p.PARENTID}>
                    <td>{p.DETAILID}</td>
                    <td>{p.TYPEID}</td>
                    <td>{p.TITLE}</td>
                    <td>{p.TITLECOLOR}</td>
                    <td>{p.CONTENT}</td>
                    <td>{p.CONTENTCOLOR}</td>
                    <td>{p.SHOWBTN}</td>
                    <td>{p.BTNCOLOR}</td>
                    <td>{p.BTNTEXT}</td>
                    <td>{p.BTNLINK}</td>
                    <td>{p.IMGURL}</td>
                    <td>{p.TAG}</td>
                    <td>{p.POSITIONCONTENT}</td>
                    <td>{p.IMGTYPE}</td>
                    <td>{p.LOGOURL}</td>
                    <td>{p.LANGUAGEID}</td>
                    <td>{p.VIDEOURL}</td>
                    <td>{p.ROWEXPAND}</td>
                    <td>{p.ROWLEVEL}</td>
                    <td>{p.CDATE}</td>
                </tr>
            ))}
        </>
    );
}