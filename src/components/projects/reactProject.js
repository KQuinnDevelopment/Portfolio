import { Project } from './Project';

const content = {
	"title": "React Web App",
	"github": "https://github.com/KQuinnDevelopment/HTML5Final",
	"video": "https://youtu.be/3YWvxRpmY88",
	"placeholder": "",
	"alt": "",
	"overview": "Final project for the HTML5 (now Mobile Web Dev) course.",
	"about": "We were tasked with choosing an application to showcase our learning from the course, and this " +
		"was when I was introduced to, had fallen in love with, React. " +
		"The application that I chose to make was a Bing Maps-based tool designed to provide companies with information " +
		"about the Burlington area. They could filter by industrial or commercial vacancies and receive directions to the " +
		"desired plot. It also provides additional information about the surrounding area, to give users a better sense of Location.",
	"thoughts": ["It makes use of (now out of date) data on lots in Burlington pulled from municiple sources.",
		"I enjoyed using React to build this web application, I look forward to improving upon what I had learned.",
		"I don't know if I will go back to this. I plan to work on other React projects in the future that display more up-to-date use of the technology."]
};

export default function ReactProject(props) {
	return <Project projectName={props.projectName}
		title={content.title}
		github={content.github}
		video={content.video}
		placeholder={content.placeholder}
		alt={content.alt}
		overview={content.overview}
		about={content.about}
		thoughts={content.thoughts}
		showVideo={props.showVideo}
		toggle={props.toggle}
	/>
}