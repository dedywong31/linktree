import React from 'react'

function Link(props){
    return (
        <div>
            <a href={props.url} target={props.name} className={props.stylename}>{props.name}</a>
        </div>
    );
}

class Link2 extends React.Component{
    render() {
        return (
            <div>
                <a href={this.props.url} target='_blank' className={this.props.stylename}>{this.props.name}</a>
            </div>
        )
    }
}

export default Link2