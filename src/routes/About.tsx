import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool, MdWork} from 'react-icons/md';
import "../styles/About.css"

const About = () => (
    <>
        <h1>About Me.</h1>
        <VerticalTimeline>
            <VerticalTimelineElement
                iconStyle={{ background: '#80d886', color: '#fff' }}
                icon={<MdWork />}
                date="Now"
                contentStyle={{ background: '#80d886', color: '#fff', textAlign: 'center' }}
                contentArrowStyle={{ borderRight: '7px solid #80d886' }}
            >
                <h3 className="vertical-timeline-element-title">Open to Work</h3>
                <p>Available to Full Stack opportunities.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#F8485E', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #F8485E' }}
                date="Jan 2025 - Jun 2025"
                iconStyle={{ background: '#F8485E', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Frontend Developer - Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">DevoTeam Cyber Trust, Lisbon</h4>
                <p>Built and tested features for Cyber Security and Compliance platforms using Symfony PHP.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--school"
                contentStyle={{ background: '#88c2e3', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #88c2e3' }}
                date="Sep 2023 - Jul 2025"
                iconStyle={{ background: '#88c2e3', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Higher VET Student</h3>
                <h4 className="vertical-timeline-element-subtitle">ITS Angelo Rizzoli Academy, Milan</h4>
                <p>I studied for two years in a professional course to become a Software Architect Specialist.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: '#9ca3af', color: '#fff' }}
                icon={<MdSchool />}
                date="Start"
                contentStyle={{ background: '#9ca3af', color: '#fff', textAlign: 'center' }}
                contentArrowStyle={{ borderRight: '7px solid #9ca3af' }}
            >
                <h3 className="vertical-timeline-element-title">Career Began</h3>
                <p>Motivated, curious, and excited to build real-world applications.</p>
            </VerticalTimelineElement>

        </VerticalTimeline>

    </>
);

export default About;
