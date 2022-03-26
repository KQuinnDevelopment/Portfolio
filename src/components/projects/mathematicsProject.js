import { Project } from './Project';
import Yahtzee from '../../images/yahtzee.png';

const content = {
	"title": "Mathematics of Gaming",
	"github": "https://github.com/KQuinnDevelopment/Botzee",
	"video": "",
	"alt": "Yahtzee scores for the class, compared against the starter code. Kara scored 3rd highest.",
	"overview": "Build an algorithm to play Yahtzee as efficiently as possible over 1 million iterations.",
	"about": "Taking the starting code provided by the professor, and with our study of probability, we had to come up with a winning Yahtzee strategy. " + 
		"In addition, we had to include a report that justified our strategy that made use of a Markov Chain diagram. " +
		"Experienced yahtzee players will almost always score more than 150 points, and regularly score above 200. " +
		"Therefore, the goal was to shoot for a score over 200 points on average and I managed to succeed with an average of ~219.98 over 1 million iterations. " +
		"We would then be ranked against our peers, with grades skewed according to how we ranked.",
	"thoughts": ["Overall, I am happy with how this turned out considering I scored third place (Minty).",
		"My strategy involved focusing on the upper card, where three+ of 1-6 would ensure bonus points.",
		"The professor admitted afterward that the best strategy is to always aim for a yahtzee.",
		"This course was very difficult, and extremely fun."]
};

export default function MathematicsProject(props) {
	return <Project projectName={props.projectName}
		title={content.title}
		video={content.video}
		placeholder={Yahtzee}
		alt={content.alt}
		overview={content.overview}
		about={content.about}
		thoughts={content.thoughts}
	/>
}