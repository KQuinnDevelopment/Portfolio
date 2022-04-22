import React from 'react';
import ReactPlayer from 'react-player';

export class ShowVideo extends React.Component {
    videoButton() {
        if ((this.props.placeholder !== "") || (this.props.videoActive && this.props.video !== "")) {
            return (
                <div className="mt-4">
                    {this.props.displayVideo}
                </div>
            );
        }
        else {
            return (
                this.props.displayVideo
            );
        }
    }

    render() {
        let buttonToggle;
        let content;
        if (this.props.video !== "") {
            buttonToggle = this.videoButton();
        }

        // conditional rendering, ensuring that content is shown either way
        if (this.props.videoActive !== true || this.props.video === "") {
            content = <img src={this.props.placeholder} alt={this.props.altText} className="mx-auto img-fluid shadow" />
        }
        else {
            content = <ReactPlayer url={this.props.video} controls={true} light={true} className="mx-auto ratio ratio-16x9" width="100%" />
        }

        return (
            <div className="col-sm-10 offset-1 text-center">
                {content}
                {buttonToggle}
            </div>
        );
    };
}