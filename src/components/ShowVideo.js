import React from 'react';
import ReactPlayer from 'react-player';

export default function ShowVideo(props) {
    if (props.showVideo !== true || props.video === "") {
        return (
            <div className="col-sm-10 offset-1">
                <img src={props.placeholder} alt={props.altText} className="mx-auto img-fluid" />
            </div>
        );
    }
    else {
        return (
            <div>
                <ReactPlayer url={props.video} controls={true} light={true} className="mx-auto" />
            </div>
        );
    }
}