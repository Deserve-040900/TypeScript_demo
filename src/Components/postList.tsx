import React from 'react';
import PropStyle from 'prop-types'

interface dataModel {
    PARENTID: string;
    DETAILID: string;
    TYPEID: number;
    TITLE: string;
    TITLECOLOR: string;
    CONTENT: string;
    CONTENTCOLOR: string;
    SHOWBTN: boolean;
    BTNCOLOR: string;
    BTNTEXT: string;
    BTNLINK: string;
    IMGURL: string;
    TAG: string;
    POSITIONCONTENT: string;
    IMGTYPE: string;
    LOGOURL: string;
    LANGUAGEID: string;
    VIDEOURL: string;
    ROWEXPAND: boolean;
    ROWLEVEL: number;
    CDATE: string;
}
interface IMyProps {
    p: dataModel;
}
const PostList: React.FC<IMyProps> = (props) => {
    const { p } = props;
    return (
        <div>
            <tr>
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
        </div>
    );
}
export default PostList