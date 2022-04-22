import React, { Component } from 'react';
import { ShowVideo } from '../ShowVideo';
import KQContainer from '../KQContainer';

// maps strings from a json array into list for rendering any number of points
function arrOut(arr) {
    return arr.map((txt) => (<li>{txt}</li>));
}

export class Project extends Component {
    // conditionally render props from specialized functions or display a warning about being unable to load the project
    // this component is broken into containers where each has staggered colours matching my colour scheme
    render() {
        let ghub; // conditional render of github link opening in new tab, or p tag informing user of no available github
        if (this.props.github === "") {
            ghub = <p className="mx-auto text-center text-danger">No GitHub Repository Available</p>;
        }
        else {
            ghub = <a href={this.props.github} target="_blank" rel="noreferrer" className="mx-auto text-center">GitHub Repository</a>;
        }
        if (this.props.title != null) {
            return (
                <div className="p-4">
                    <div>
                        <h1 className="text-center">{this.props.title}</h1>
                        <div className="row">
                            {ghub}
                        </div>
                    </div>
                    <KQContainer customCss="bg-secondary mt-4">
                        <h3 className="text-center">Overview</h3>
                        <p className="text-center p-0">{this.props.overview}</p>
                        <ShowVideo video={this.props.video} placeholder={this.props.placeholder} altText={this.props.alt}
                            displayVideo={this.props.toggle} videoActive={this.props.showVideo} />
                    </KQContainer>
                    <KQContainer customCss="bg-accent my-4">
                        <h3 className="text-center">About the Project</h3>
                        <p className="col-lg-10 offset-lg-1 mb-0 p-0">{this.props.about}</p>
                    </KQContainer>
                    <KQContainer customCss="bg-secondary">
                        <h3 className="text-center">Thoughts</h3>
                        <ul className="col-lg-10 offset-lg-1 mb-0 py-0">
                            {arrOut(this.props.thoughts)}
                        </ul>
                    </KQContainer>
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