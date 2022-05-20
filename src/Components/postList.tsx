import React from 'react';
import PropStyle from 'prop-types';
import './PostList.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

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
            <ScrollMenu onWheel={onWheel}>
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
            </ScrollMenu>
        </>
    );
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  
    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }
  
    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }