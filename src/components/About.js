import React from 'react';
import KQ from '../images/kqherself.jpg';
import KQContainer from './KQContainer';

export function About() {
    return (
        <div className="p-4">
            <h1 className="text-center mb-4">About Me</h1>
            <div className="row h-auto">
                <div className="col-xl mx-auto">
                    <KQContainer customCss="bg-secondary">
                        <p className="mt-0 p-0">I am a 31 year old transgender woman and junior software developer who recently graduated from Mohawk College in Hamilton, Ontario.</p>
                        <p className="p-0">I pride myself on my work ethic, professionalism, organization, and drive to learn and improve.</p>
                        <p className="mb-0 p-0">While in college, my focus was primarily on C-like languages (both Java and C#), with web development (ASP.NET, ReactJS, VueJS)
                            to round out my skillset.</p>
                    </KQContainer>
                    <KQContainer customCss="bg-accent my-4">
                        <p className="mt-0 p-0">My work experience includes...</p>
                        <ul className="mb-0 py-0">
                            <li>Two augmented reality (AR) applications</li>
                            <li>Contributing to an academic journal as a co-author and editor</li>
                            <li>Being a key component in presentations for executives</li>
                            <li>Attending conferences, giving presentations, and answering questions</li>
                        </ul>
                    </KQContainer>
                    <KQContainer customCss="bg-secondary">
                        <p className="mt-0 p-0">In my spare time, I...</p>
                        <ul className="mb-0 py-0">
                            <li>Write music and play instruments, primarily guitar - though I dabble in electronic music</li>
                            <li>Started my own game development business - currently a sole proprietorship, to become a LLC</li>
                            <li>Read, primarily books that can help me improve myself such
                                as <a href="https://itrevolution.com/the-phoenix-project/" className="link-dark" target="_blank" rel="noreferrer">The Phoenix Project</a> and <a href="https://www.joshwaitzkin.com/the-art-of-learning" className="link-dark" target="_blank" rel="noreferrer">The Art of Learning</a>
                            </li>
                        </ul>
                    </KQContainer>
                </div>
                <div className="col-xl mx-auto h-auto mt-4 mt-xl-0 text-center">
                    <img src={KQ} alt="" className="img-fluid rounded shadow mb-2" />
                    <p>Appearance a work-in-progress...</p>
                </div>
            </div>
            <KQContainer customCss="bg-accent mb-4 mt-xl-4">
                <p className="mt-0 p-0">
                    At this point, I feel as if I've been selling myself enough and want to be more candid.
                    It took me a while to figure out what I wanted to do with my life, and I settled on software development after fiddling
                    around with codecademy when I found programming interesting.
                </p>
                <p className="mb-0 p-0">
                    It did not come naturally at first, but I was able
                    to graduate with a decently high average because I was willing to put in the work to improve rather than get complacent.
                    It wasn't a straightforward path by any means, but it was a period of growth and one of which I am proud.
                </p>
            </KQContainer>
        </div>
    );
}