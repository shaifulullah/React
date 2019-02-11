import React, { Component } from 'react'


export default class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.titleWasClicked = this.titleWasClicked.bind(this)
    }
    titleWasClicked(event) {
        event.preventDefault()
        //alert('message')
        const { dataCallback } = this.props; //calling my dataCallback while clicking on title
        dataCallback("hello world testing")
    }
    render() {
        const { post } = this.props
        return (
            <div>
                <h1 onClick={this.titleWasClicked}>{post.title} </h1>
                <p>{post.content} </p>
            </div>
        )
    }
}
