import { Project } from './Project';

const content = {
	"title": "Co-Op",
	"github": "",
	"video": "https://youtu.be/hdrEJqEUzT0",
	"placeholder": "",
	"alt": "",
	"overview": "An Augmented Reality (AR) application based on real world equipment.",
	"about": "This was a six month long journey to rebuild and improve upon an existing AR application. " +
		"In that time, I got to attend two conferences, be published in an academic journal, and be involved in presentations for CEOs. " +
		"One such CEO was the VP of Mitsubishi Canada, for whom the included video was presented - alongside a demonstration walkthrough by me. " +
		"Mohawk presented for Mitsubishi as part of a push to get them to build a plant in Hamilton, with this project being used to show what the students " +
		"were capable of. " +
		"The purpose of the project was to mimic real world equipment so that students could complete their in-class labs on simulated equivalent. " + 
		"That way, if they didn't have an opportunity to practice in class or were long distance learning, they could achieve a similar outcome.",
	"thoughts": ["To this day, I think I may be one of the only employees Mohawk has fully paid for to attend a conference.",
		"I worked so very hard on this project and yet I still wish that I could have done better.",
		"I was the core programmer on the project, with my partner almost exclusively handling the networked component. It was my job to bring the machine to life."]
};

export default function CoOpProject(props) {
	return <Project projectName={props.projectName}
		title={content.title}
		github={content.github}
		video={content.video}
		placeholder={content.placeholder}
		alt={content.alt}
		overview={content.overview}
		about={content.about}
		thoughts={content.thoughts}
	/>
}