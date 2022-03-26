import React from 'react';
import { RoutingLink } from './RoutingLink';

export function Home() {
    RoutingLink("Home");

    return (
        <div className="m-4">
            <h1 className="mx-auto text-center">Kara Quinn Development</h1>
            <p className="my-4">Welcome to my portfolio! My name is Kara Quinn, and I am a recent graduate of Mohawk College.
                My goal for this website is to showcase projects that I enjoyed working on at college,
                to give background on myself, and for additional practice building a single-page web application.
                It makes use of most of the technologies that I enjoy using and hope to focus on in my software development career.
            </p>
            <p>This site is built using:</p>
            <ul>
                <li>
                    <a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code
                </li>
                <li>
                    <a href='https://www.mysql.com/'>MySQL</a> for user login storage
                </li>
                <li>
                    <a href='https://facebook.github.io/react/'>React</a> for client-side code
                </li>
                <li>
                    <a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling
                </li>
                <li>
                    <a href='https://www.digitalocean.com/'>DigitalOcean</a> for web hosting
                </li>
            </ul>
            <p className="my-4">
                While no means perfect, I hope that it gives a rough estimate of my current abilities and interests.
                In video, my name should appear as Quinn Helm or as my <a href="https://www.dictionary.com/e/pop-culture/deadname/">deadname</a>.
                Thank you for taking the time to look it over and for considering me as a potential hire.
            </p>
        </div>
    );
}