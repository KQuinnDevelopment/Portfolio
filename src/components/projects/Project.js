import React, { Component } from 'react';
import ShowVideo from '../ShowVideo';
import { RoutingLink } from '../RoutingLink';

function ghub(link) {
    if (link === "") {
        return <p className="mx-auto text-center text-danger">No GitHub Repository Available</p>
    }
    else {
        return <a href={link} className="mx-auto text-center">GitHub Repository</a>
    }
}

function arrOut(arr) {
    return arr.map((txt) => (<li>{txt}</li>));
}

export class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showVideo: true
        };
    }

    componentDidMount() {
        RoutingLink(this.props.projectName);
    }

    render() {
        if (this.props.title != null) {
            return (
                <div className="m-4">
                    <h1 className="mx-auto text-center">{this.props.title}</h1>
                    <div className="row">
                        {ghub(this.props.github)}
                    </div>
                    <h3 className="mx-auto my-2 text-center">Overview</h3>
                    <p className="mx-auto text-center">{this.props.overview}</p>
                    <div className="row my-2">
                        <ShowVideo showVideo={this.state.showVideo} video={this.props.video}
                            placeholder={this.props.placeholder} altText={this.props.alt} />
                    </div>
                    <h3 className="mx-auto my-2 text-center">About the Project</h3>
                    <div className="row my-0">
                        <p className="mx-auto col-8 offset-2">{this.props.about}</p>
                    </div>
                    <h3 className="mx-auto text-center">Thoughts</h3>
                    <div className="row">
                        <ul className="mx-auto col-8 offset-2">
                        {arrOut(this.props.thoughts)}
                        </ul>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div className="m-4">
                    <h1 className="text-danger text-center">Unable to load desired project...</h1>
                    <h3 className="text-danger text-center">Please try another!</h3>
                </div>
            );
        }
    }
}