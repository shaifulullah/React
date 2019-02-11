import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'
export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.handleDataCallback = this.handleDataCallback.bind(this)
    }
    handleDataCallback(txtMsg) {
        alert(txtMsg);
        console.log("From post list handlecallback in constructor", this)
    }
    render() {
        return (
            <div>
                <h1>Hello There</h1>
                {PostData.map((item, index) => {
                    return <PostDetail
                        post={item}
                        key={`post-list-key ${index}`}
                        dataCallback={this.handleDataCallback} />
                    // return <div>
                    //     <h1>{postDetails.title}</h1>
                    //     <p>{postDetails.content}</p>
                    // </div>
                })}
            </div>
        )
    }
}