import { Project } from './Project';

const content = {
	"title": "Parallel Processing",
	"video": "",
	"placeholder": "",
	"alt": "",
	"overview": "",
	"about": "",
	"thoughts": ["", "", ""]
};

export default function ParallelProject(props) {
	return <Project projectName={props.projectName}
		title={content.title}
		video={content.video}
		placeholder={content.placeholder}
		alt={content.alt}
		overview={content.overview}
		about={content.about}
		thoughts={content.about}
	/>
}