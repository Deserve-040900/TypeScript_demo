import React from 'react';
import PropStyle from 'prop-types';
import './PostList.css';

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
            <div className="container-fluid">
                <table className="table table-striped">
                    <thead className="thead">
                        <tr className="tr bg-dark text-light">
                            {
                                Object.keys(post[0]).map((key, index) =>(
                                    <th className="th" data-filter-control="input" key = { key + index }>{key}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {post.map((p: any) => (
                            <tr className="tr" key={p.PRODUCTID}>
                                {
                                    Object.values(p).map((value:any, index) =>(
                                        <td className="td" key = {index}>{value}</td>
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