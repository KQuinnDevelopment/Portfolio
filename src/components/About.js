import React from 'react';
import { RoutingLink } from './RoutingLink';
import KQ from '../images/kqherself.jpg';

export function About() {
    RoutingLink("About");

    return (
        <div className="m-4">
            <h1 className="mx-auto mb-4 text-center">About Me</h1>
            <div className="row">
                <div className="col-lg-6 offset-xl-1">
                    <p>I am a 29 year old transgender woman and a junior software developer who has recently (February 2022) graduated from Mohawk College in Hamilton, Ontario.</p>
                    <p>I am someone who prides themselves on their work ethic, professionalism, organization, and drive to learn and improve.</p>
                    <p>While in college, my focus was primarily on C-like languages (both Java and C#), with some web development (ASP.NET, ReactJS, VueJS)
                        to round out my skillset.</p>
                    <p>My work experience includes:</p>
                    <ul>
                        <li>Two augmented reality (AR) applications</li>
                        <li>Contributing to an academic journal as a co-author and editor</li>
                        <li>Being a key component in presentations for executives</li>
                        <li>Attending conferences, giving presentations, and answering questions</li>
                    </ul>
                    <p>In my spare time, I...</p>
                    <ul>
                        <li>Write music and play instruments, primarily guitar</li>
                        <li>Started my own game development business</li>
                        <li>Read, primarily books that can help me improve myself</li>
                    </ul>
                </div>
                <div className="col-xxl-4 col-xl-5 col-lg-6 pl-3">
                    <img src={KQ} alt="" className="img-fluid rounded shadow mb-2" />
                    <p className="mx-auto text-center">Appearance a work-in-progress...</p>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-8 offset-2">
                    <p>At this point, I feel as if I've been selling myself enough and want to be more candid.
                        It took me a while to figure out what I wanted to do with my life, and I settled on software development after fiddling
                        around with codecademy when I found programming interesting. It did not come naturally at first, but I was able
                        to graduate with a decently high average because I was willing to put in the work to improve rather than get complacent.
                        It wasn't a straightforward path by any means, but it was a period of growth and one of which I am proud.
                    </p>
                </div>
            </div>
        </div>
    );
}