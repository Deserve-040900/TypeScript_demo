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
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr className="table-primary">
                            {
                                Object.keys(post[0]).map((key, index) =>(
                                    <th key = { key + index }>{key}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {post.map((p: any) => (
                            <tr key={p.DETAILID}>
                                {
                                    Object.values(p).map((value:any, index) =>(
                                        <td key = {index}>{value}</td>
                                    ))
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}