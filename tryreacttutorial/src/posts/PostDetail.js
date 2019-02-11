import React, { Component } from 'react'


export default class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.titleWasClicked = this.titleWasClicked.bind(this)
        this.toggleContent = this.toggleContent.bind(this)
        this.state = {
            showContent: false,
        }
    }
    titleWasClicked(event) {
        event.preventDefault()
        //alert('message')
        const { dataCallback } = this.props; //calling my dataCallback while clicking on title
        dataCallback("hello world testing")
    }
    toggleContent(event) {
        event.preventDefault()
        this.setState({
            showContent: !this.state.showContent
        })
    }
    render() {
        const { post } = this.props
        const { showContent } = this.state
        return (
            <div>
                <h1 onClick={this.titleWasClicked}>{post.title} </h1>
                {showContent === true ? <p>{post.content} </p> : ' '}
                {/* //in line number31 if we want to show class then use below
                    // {<p className= {`${showContent === true ? 'd-block ': 'd-none'}`} > {post.content} </p>} */}
                <button onClick={this.toggleContent}>Show content</button>
            </div>
        )
    }
}

