import React from 'react';

export function Home() {
    return (
        <div className="p-4">
            <h1 className="mx-auto text-center text-info">Kara Quinn <span className="text-muted">Development</span></h1>
            <p className="my-4">Welcome to my portfolio! My name is Kara Quinn, and I am a recent graduate of Mohawk College.
                My goal for this website is to showcase projects that I enjoyed working on at college,
                to give background on myself, and for additional practice building a single-page web application.
            </p>
            <p>This site is built using:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react/" target="_blank" rel="noreferrer">React</a> for client-side code
                </li>
                <li>
                    <a href="http://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a> for layout and styling
                </li>
                <li>
                    <a href="https://www.digitalocean.com/" target="_blank" rel="noreferrer">DigitalOcean</a> for web hosting
                </li>
            </ul>
            <p className="my-4">You can find my github repository <a href="https://github.com/KQuinnDevelopment" target="_blank" rel="noreferrer">here!</a></p>
            <p>
                I hope that this portfolio gives a rough estimate of my current abilities and interests as a junior developer.
                If anything on this site is unclear, or if you have any questions at all, do not hesitate to contact me on <a href="https://www.linkedin.com/in/karaquinnh/" target="_blank" rel="noreferrer">LinkedIn</a>.
                Thank you for taking the time to look it over and for considering me as a potential hire.
            </p>
            <p>My name may appear differently, or as my <a href="https://www.dictionary.com/e/pop-culture/deadname/" target="_blank" rel="noreferrer">deadname</a>, throughout the site.
               That was how I presented myself during college but now that I've graduated, I am determined to be my more authentic self.</p>
        </div>
    );
}