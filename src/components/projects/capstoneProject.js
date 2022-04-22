import { Project } from './Project';
import GameBuilds from '../../images/gamebuilds.png';

const content = {
	"title": "Capstone",
	"github": "https://github.com/KQuinnDevelopment/Web_Capstone",
	"video": "https://youtu.be/OQJReBSd7Pc",
	"alt": "",
	"overview": "ASP.NET, MySQL, and SignalR come together in my to-be company website.",
	"about": "This is my culminating project for Mohawk College, required to graduate. To build it, I had to utilize " +
		"skills developed throughout my time at college. I chose to build it entirely in ASP.NET MVC because that is what I feel " +
		"most comfortable working with given the number of courses I took involving it. " + 
		"I wanted to build a company website for my own in-progress business. To satisfy project requirements, I decided to flesh it out " +
		"with a realtime chat and 'item builds' for my game.",
	"thoughts": ["I maintain that this is a good idea for building a community around my game(s).",
		"I enjoyed working with ASP.NET MVC for this project and learned a lot about how to use it.",
		"I kept the appearance of it close to the wireframe mockups I built. When I go back to this, I will update the visual experience to be significantly more 'on brand.'",
		"Ultimately, I didn't get to spend as much time on this project as it needed given that I had to move twice during the semester."]
};

export default function CapstoneProject(props) {
	return <Project projectName={props.projectName}
		title={content.title}
		github={content.github}
		video={content.video}
		placeholder={GameBuilds}
		alt={content.alt}
		overview={content.overview}
		about={content.about}
		thoughts={content.thoughts}
		showVideo={props.showVideo}
		toggle={props.toggle}
	/>
}