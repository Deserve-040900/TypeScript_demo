import React, { useState } from 'react';
import PropStyle from 'prop-types';
import './PostList.css';

PostList.propTypes = {
    post: PropStyle.array,
};

PostList.defaultProps = {
    post: [],
};

function PostList (props: any) {
    const { post } = props;
    const [searchedVal, setSearchedVal] = useState("");

    return (
        <>
        <label htmlFor='Searching' className="label"> Filter PARENTID <input type='text' placeholder='Search by PARENTID ...' onChange={(e) => setSearchedVal(e.target.value)} /></label>
            <div className="container-fluid">
                <table className="table table-striped" id="myTable">
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
                        {post.filter((row: any) =>
                            !searchedVal.length || row.PARENTID
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase()) 
                        )  // data.filter.map
                        .map((p: any) => (
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

export default PostList;